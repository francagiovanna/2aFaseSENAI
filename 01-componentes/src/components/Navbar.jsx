import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <a href="">
          <img src="./imagem/typcn--home.svg" alt=''/>
      
          Home
        </a>
        <a href="">
          <img src="./imagem/mdi--contact.svg" alt=''/>

          Contato
          </a>
        <a href="">
          <img src="./imagem/ic--round-dashboard.svg" alt=''/>

          Dashboard
        </a>
    </div>
  )
}

export default Navbar