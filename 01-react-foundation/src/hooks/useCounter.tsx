import { useState } from 'react';

interface Options {
  initValue: number;
}

export const useCounter = ({ initValue = 0}: Options) => {
    const [count, setCount] = useState<number>(initValue);

   const updateCount = (value: number): void => {
      const newValue = count + value;
      if (newValue >= 0) { 
        setCount(count + value);
      }
    }

  return {
    count,
    updateCount
  }
}
