import './Corpo.css'
import Texto from './Texto'


function Corpo() {
  function confirmarPresenca(){
   let usuario = prompt("Digite seu nome de usuario:")
   if(usuario == "fulaninho"){
    alert("Presença confirmada")
   }else{
    alert("ERRO, digite seu nome verdadeiro")
   }
  }
  return (
    <div className="corpo-container">
        <h1>Inauguração de nova Farmarcia</h1>
        <Texto texto={"Venha para a inuaguração de uma nova direção uma nova FarMarcia. Localização na aba a cima. Não deixe de conferir tambem nossa nova identidade."}/>

        <img className='imagem-corpo' src="./imagem/farmarcia.PNG.png" alt=''/>
        <button onClick={confirmarPresenca}>confirmar presença</button>

        <h2>Confira nossa nova identidade visual</h2>
        <div className='imagem-branding'>

        <img src="./imagem/farmarcia-camisetas.PNG.png" alt="" />
        <img src="./imagem/farmarcia-cartoes.PNG.png" alt="" />
        <img src="./imagem/farmarcia-camiseta.PNG.png" alt="" />
        </div>

    </div>
  )
}

export default Corpo