import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
    <a href="">
        <img src="/imagem/streamline-ultimate--party-ballon-bold.svg" alt="" />
        Inauguração
    </a>

    <a href="">
        <img src="/imagem/solar--point-on-map-bold.svg" alt="" />
        Localização
    </a>

    <a href="">
        <img src="/imagem/streamline-ultimate--face-id-1-bold.svg" alt="" />
        Nossa Identidade
    </a>
    
    <a href="">
        <img src="jam--direction-f.svg" alt="" />
        Nova Direção
    </a>
    </div>
  )
}

export default Navbar