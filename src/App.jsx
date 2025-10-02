import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-amber-500">
        <h1>Andrea</h1>
        <p>Artista digital</p>
      </div>
    </>
  )
}

export default App
