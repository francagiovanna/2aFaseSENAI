import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">Home Page</Link>
      <Link to="/pagina1">Página 1</Link>
      <Link to="/pagina2">Página 2</Link>
      <Link to="/pagina3">Página 3</Link>
      <Link to="/produtos">Produtos</Link>
    </nav>
  )
}

export default Navbar