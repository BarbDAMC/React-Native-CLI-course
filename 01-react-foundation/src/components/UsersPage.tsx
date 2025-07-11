import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRow';

export const UsersPage = () => {
  const { usersList, nextPage, previousPage } = useUsers();
  
  return (
    <>
      <h3>Usuarios: </h3>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

         <tbody>
          {usersList.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={previousPage}>Previous</button>
        &nbsp;
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}
