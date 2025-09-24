import { useState } from 'react'
import './App.css'
import Pneu from './components/Pneu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Exercicios para leitura de input</h1>
    <Pneu>/</Pneu>
    </>
  )
}

export default App
