import {useState} from "react"
import './App.css'

function App() {
  const [pessoas, setPessoas]=useState([
    { id: 1, nome: "Dona Beth", idade: 72 },
    { id: 2, nome: "Dr Auzio", idade: 78 },
    { id: 3, nome: "Sarumano", idade: 68 },
    { id: 22, nome: "Dona Beth", idade: 72 },
    { id: 11, nome: "Dr Auzio", idade: 78 },
    { id: 34, nome: "Sarumano", idade: 68 },
  ])
  function Cadastrar(){
    let pesssoa = {
      id: Date.now(),
      nome: Date.now(),
      idade: Date.now()
    }

    console.log(pessoa)
    // pesssoas.push(pessoa) nunca faça isso com useState

    setPessoas([pessoa,])

  }

  return (
    <div>
      <h1>Exercicio Array</h1>
      <button>Cadastrar</button>
      <div className='container-cards'>
        {pessoas.map((pessoa) => (

          <div key={pessoa.id} className='card-pessoa'>
            <h2>{pessoa.nome}</h2>
            <p>Idade: {pessoa.idade}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
