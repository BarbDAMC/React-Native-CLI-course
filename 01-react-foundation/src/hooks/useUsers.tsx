import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import type { ReqRespUserListResponse, User } from '../interfaces';

export const useUsers = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
    const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current)
    .then(users => setUsersList(users));
  }, []);

    const loadUsers = async (pageNumber: number = 1) => {
      try {
        const { data } = await  axios.get<ReqRespUserListResponse>(
          'https://reqres.in/api/users',
          {
            headers: {"x-api-key": "reqres-free-v1"},
            params: { page: pageNumber}
          }
        )
      
        return data.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    }


    const nextPage = async () => {
      currentPageRef.current++;
      const users = await loadUsers(currentPageRef.current);
  
      if (users.length > 0) {
        setUsersList(users);
      } else {
        currentPageRef.current--;
      }
    }
  
    const previousPage = async () => {
      if (currentPageRef.current > 1) {
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsersList(users);
      }
    }
  

  return {
    usersList,
    nextPage,
    previousPage
  }
}
