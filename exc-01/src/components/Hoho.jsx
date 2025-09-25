import { useState } from 'react'

function Hoho() {
    const [numeroHo, setNumeroHo] = useState('');
    const [resultado, setResultado] = useState('');
  
    const gerarHos = (n) => {
      if (n && n > 0 && n <= 1000000) {
        const hos = Array(parseInt(n)).fill('Ho').join(' ');
        setResultado(hos + '!');
      } else {
        setResultado('');
      }
    };
  
    return (
      <div className="container">
        <h2 className="titulo">Papai Noel</h2>
        
        <div className="campo">
          <label className="label">Número sorteado (N):</label>
          <input
            type="number"
            value={numeroHo}
            onChange={(e) => {
              setNumeroHo(e.target.value);
              gerarHos(e.target.value);
            }}
            className="input"
            placeholder="Digite quantos Ho's o Papai Noel deve falar"
            min="1"
            max="1000000"
          />
        </div>
  
        {resultado && numeroHo && (
          <div className="resultado">
            <h3 className="titulo-resultado">Papai Noel fala:</h3>
            <p className="valor-resultado">{resultado}</p>
          </div>
        )}
      </div>
    );
  }

export default Hoho