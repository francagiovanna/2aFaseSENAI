// Sorveteria.jsx
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Sorveteria() {
    const { sorveteria, sorvetes } = useContext(GlobalContext);
    
    return (
        <div>
            <h1>{sorveteria}</h1>
            <ul>
                {sorvetes.map(sorvete => (
                    <li key={sorvete.id}>
                        {sorvete.nome} - R$ {sorvete.valor.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sorveteria;