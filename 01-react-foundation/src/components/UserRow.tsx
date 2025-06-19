import type { User } from '../interfaces';

interface Props {
  user: User;
}

export const UserRow = ({user}: Props) => {
  const { id, first_name, last_name, email, avatar } = user;

  return (
    <tr key={id}>
      <td>
        <img 
          src={avatar} 
          alt={`${first_name} ${last_name}`} 
          width={40} 
          height={40} 
        />
      </td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </tr>
  )
}