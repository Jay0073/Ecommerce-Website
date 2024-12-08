import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Admin from './pages/Admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Admin />
    </>
  )
}

export default App
