import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5);

  const addValue = () => {

    counter = counter + 1;
    setCounter(counter);

    console.log("clicked",counter)
  };

  const removeValue = () => {

    counter = counter - 1;
    setCounter(counter);
    console.log("clicked remove!",counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value = {counter} </h2>

      <button onClick={addValue} >Add Value</button>
      <br />

      <button onClick={removeValue} >Remove Value</button>
      <br />
      
    </>
  )
}

export default App
