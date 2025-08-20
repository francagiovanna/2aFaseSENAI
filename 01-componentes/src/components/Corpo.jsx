import './Corpo.css'
import Texto from './Texto'
import Textao from './Textao'
import Titulo1 from './Titulo1'
import Titulo2 from './Titulo2'

function Corpo() {
  function logar(){
   let usuario = prompt("Digite seu nome de usuario:")
   if(usuario == "adm123"){
    alert("Logado com sucesso")
   }else{
    alert("errou, o usuario era adm123")
   }
  }
  return (
    <div className="corpo-container">
        <Titulo1 />
        <Titulo2  texto={"Primeiro pedaço de página"} emoji={"😶‍🌫️"}/>
        <Texto texto={"Texto enviado para componente via props"}/>

        <Titulo2  texto={"Segundo pedaço de página"}/>
        <Textao texto={"Segundo texto enviado via props"}/>
        <img className='imagem-corpo' src="./imagem/livros-react.jpg" alt=''/>
        <button onClick={logar}>logar</button>
    </div>
  )
}

export default Corpo