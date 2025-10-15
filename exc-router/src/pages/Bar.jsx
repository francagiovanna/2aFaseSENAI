import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Bar() {
    const { produtosBar } = useContext(GlobalContext);
    
    return (
        <div>
            <h1>Produtos do Bar</h1>
            <ul>
                {produtosBar.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - R$ {produto.valor.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bar;