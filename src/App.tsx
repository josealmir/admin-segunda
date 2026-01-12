import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IndexAddress } from './pages/address'
import { IndexClient } from './pages/clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <IndexAddress />
     <IndexClient /> 
    </>
  )
}

export default App
