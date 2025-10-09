import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Materiais() {
    const { servicosBorracharia } = useContext(GlobalContext);
    
    return (
        <div>
            <h1>Serviços da Borracharia</h1>
            <ul>
                {servicosBorracharia.map(servico => (
                    <li key={servico.id}>
                        {servico.nome} - R$ {servico.valor.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Materiais;