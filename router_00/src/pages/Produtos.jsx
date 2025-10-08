import React from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Produtos() {
    const{produto, produtos} = useContext(GlobalContext)
  return (
    <div>
         <Navbar />
        <h1>Produtos</h1>
        produtos,produtos,produtos, {produtos},
        {produtos[0].nome}, {produto[1].nome}
    </div>
    
  )
}

export default Produtos