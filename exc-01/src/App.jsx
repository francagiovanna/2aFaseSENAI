import { useState } from 'react'
import './App.css'
import Pneu from './components/Pneu'
import Hoho from './components/Hoho'
import Pum from './components/Pum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Exercicios para leitura de input</h1>
    <Pneu>/</Pneu>
    <Hoho></Hoho>
    <Pum></Pum>
    </>
  )
}

export default App
