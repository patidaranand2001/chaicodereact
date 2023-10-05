import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const up=()=>{
    setCount(count+1);
  }
  const down=()=>{
    setCount(count-1);
  }
  return (
    <>
      
     <h1>{count}</h1>
     <button className='mx-3' onClick={up}>increment</button>
     <button onClick={down}>decrement</button>
    
    </>
  )
}

export default App
