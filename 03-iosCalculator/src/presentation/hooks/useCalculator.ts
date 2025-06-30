import { useState, useEffect, useRef } from "react";

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}


export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [formula, setFormula] = useState('');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operator>();

   useEffect(() => {
      if (lastOperation.current) {
        const firstFormulaPart = formula.split(' ').at(0);
        setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
      } else {
        setFormula( number )
      }
    }, [ number ])

    useEffect(() => {
      const subResult = calculateSubResult();
      setPreviousNumber(`${subResult}`)
    }, [formula])



  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    lastOperation.current = undefined;
    setFormula('');
  };

  const deleteOperation = () => { 
    const negativeNumber = formula.length === 2 && formula.includes('-');
    
    if (formula.length === 1 || negativeNumber) {
      setNumber('0');
      setPreviousNumber('0');
      return setFormula('');
    }

    const updateFormula = formula.substring(0, formula.length - 1);
    return setFormula(updateFormula);
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
    calculateResult();
    
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
    const result = calculateSubResult();
    setFormula(`${result}`);
  
    lastOperation.current = undefined;
    setPreviousNumber('0');
  }

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if ( isNaN(num2)) return num1;

    switch (lastOperation.current) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  }

  return {
    number,
    formula,
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
