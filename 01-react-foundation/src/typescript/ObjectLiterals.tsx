
interface Address {
  country: string;
  houseNo: number;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isAlive?: boolean; // Propiedad opcional
  address: Address
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 24,
    firstName: 'Barbara',
    lastName: 'Morantes',
    address: {
      country: 'Ecuador',
      houseNo: 123
    }
  };


  return (
    <>
      <h3>Objetos literales</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
