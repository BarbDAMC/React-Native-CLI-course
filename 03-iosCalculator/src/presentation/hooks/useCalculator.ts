import { useState, useRef } from "react";

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}


export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operator>(0);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

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

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber( number.slice(0, -1));
    } else {
      setPreviousNumber( number);
    }

    setNumber('0');
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide
  }

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply
  }

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract
  }

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add
  }

  const calculateResult = () => {
    const num1 = Number( number);
    const num2 = Number( previousNumber);

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        setPreviousNumber('0');
        break;
      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        setPreviousNumber('0');
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        setPreviousNumber('0');
        break;
      case Operator.divide:
        if (num1 === 0) {
          setPreviousNumber('No se puede dividir por 0');
        } else {
          setNumber(`${num2 / num1}`);
          setPreviousNumber('0');
        }
    
        break;

      default:
        throw new Error('Operation not implemented');
    }
  }

  return {
    number,
    previousNumber,

    clean,
    deleteOperation,
    toogleSign,
    buildNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
  }
}
