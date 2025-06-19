import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { count, updateCount } = useCounter({ initValue: 5 });
 
  
  return (
    <>
      <h3>Contador con Hook: <small>{count}</small></h3>
    
      <div>
        <button onClick={() => updateCount(1)}>+1</button>
        &nbsp;
        <button onClick={() => updateCount(-1)}>-1</button>
      </div>
    </>
  )
}
