import React from 'react'

export const BasicTypes = () => {
    const name: string = 'Barbara';
    const age: number = 24;
    const isActive: boolean = true;

    const powers: string[] = ['Liderazgo', 'Comunicación', 'Empatía'];

  return (
    <>
      <h3>Tipos básicos</h3>

      <p>Hola, {name}!</p>
      <p>Edad: {age}</p>
      <p>Activo: {isActive ? 'Sí' : 'No'}</p>
      <p>Poderes: {powers.join(', ')}</p>
    </>
  )
}
