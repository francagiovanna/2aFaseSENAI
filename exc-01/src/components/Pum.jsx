import { useState } from 'react'

function Pum() {
    const [numeroLinhas, setNumeroLinhas] = useState('');
    const [resultado, setResultado] = useState([]);

    const gerarSequencia = (n) => {
        if (n && n > 0) {
            const linhas = [];
            let contador = 1;

            for (let i = 0; i < parseInt(n); i++) {
                const linha = `${contador} ${contador + 1} ${contador + 2} PUM`;
                linhas.push(linha);
                contador += 4;
            }

            setResultado(linhas);
        } else {
            setResultado([]);
        }
    };

    return (
        <div className="container">
            <h2 className="titulo">Problema PUM</h2>

            <div className="campo">
                <label className="label">Número de linhas (N):</label>
                <input
                    type="number"
                    value={numeroLinhas}
                    onChange={(e) => {
                        setNumeroLinhas(e.target.value);
                        gerarSequencia(e.target.value);
                    }}
                    className="input"
                    placeholder="Digite o número de linhas"
                    min="1"
                />
            </div>

            {resultado.length > 0 && numeroLinhas && (
                <div className="resultado">
                    <h3 className="titulo-resultado">Saída:</h3>
                    <div className="valor-resultado">
                        {resultado.map((linha, index) => (
                            <div key={index} style={{ fontFamily: 'monospace' }}>
                                {linha}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}


export default Pum