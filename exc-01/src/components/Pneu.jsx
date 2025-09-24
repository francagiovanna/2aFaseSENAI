import { useState } from 'react'

function Pneu() {
    const [pressaoDesejada, setPressaoDesejada] = useState('');
  const [pressaoAtual, setPressaoAtual] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularDiferenca = (desejada, atual) => {
    if (desejada && atual) {
      const diferenca = parseInt(desejada) - parseInt(atual);
      setResultado(diferenca);
    }
  };

  return (
    <div className="container">
      <h2 className="titulo">Bomba Pressão</h2>
      
      <div className="grupo-inputs">
        <div className="campo">
          <label className="label">Pressão Desejada (N):</label>
          <input
            type="number"
            value={pressaoDesejada}
            onChange={(e) => {
              setPressaoDesejada(e.target.value);
              calcularDiferenca(e.target.value, pressaoAtual);
            }}
            className="input"
            placeholder="Digite a pressão desejada"
          />
        </div>

        <div className="campo">
          <label className="label">Pressão Atual (M):</label>
          <input
            type="number"
            value={pressaoAtual}
            onChange={(e) => {
              setPressaoAtual(e.target.value);
              calcularDiferenca(pressaoDesejada, e.target.value);
            }}
            className="input"
            placeholder="Digite a pressão atual"
          />
        </div>
      </div>

      {resultado !== null && pressaoDesejada && pressaoAtual && (
        <div className="resultado">
          <h3 className="titulo-resultado">Diferença:</h3>
          <p className="valor-resultado">{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default Pneu