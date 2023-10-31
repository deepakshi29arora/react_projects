import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleclick()
  {
    setCount(countxyz=> countxyz+1);
    setCount(counttre=> counttre+1);
    setCount(count123=> count123+1);
    setCount(count456=> count456+1);
    setCount(count789=> count789+1);
  }

  return (
    <>
     <h1 className='bg-green-500'>Test Tailwind 
      <button onClick={handleclick}>Add-{count}</button>
     </h1>
    </>
  )
}

export default App
