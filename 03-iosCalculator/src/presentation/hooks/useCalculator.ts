import { useState } from "react";


export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const clean = () => setNumber('0');

  const deleteOperation = () => { 
    const negativeNumber = number.length === 2 && number.includes('-');
    
    if (number.length === 1 || negativeNumber) {
      return setNumber('0');
    }

    const updatedNumber = number.substring(0, number.length - 1);
    return setNumber(updatedNumber);
  }

  const toogleSign = () => {
    if(number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  }


  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      
      if (numberString === '.') {
        return setNumber(number + numberString)
      }

      //Otro cero y no hay punto
      if(numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString)
      }

      //Si es diferente de cero, no hay punto decimal y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString)
      }

      // Evitar 0000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  }


  return {
    number,

    clean,
    deleteOperation,
    toogleSign,
    buildNumber
  }
}
