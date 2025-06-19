
import { 
  BasicTypes,
  ObjectLiterals,
  BasicFunctions
} from "./typescript"

import { 
  Counter, 
  CounterWithHook, 
  UsersPage, 
  LoginPage, 
  FormsPage 
} from "./components"


function App() {

  return (
    <main>
      <h1>Introducción a React + TS</h1>

      <BasicTypes />
      <ObjectLiterals />
      <BasicFunctions />
      <Counter />
      <CounterWithHook />
      <LoginPage />
      <UsersPage />

      <FormsPage />


    </main>
  )
}

export default App
