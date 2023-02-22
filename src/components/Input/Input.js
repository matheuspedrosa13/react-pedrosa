import './Input.less'

export function Input({funcaoPegar, idInput, tipo, pattern, idP, classeInput, titulo}){
    return (
        <div className='divInputs'>
            <label>Digite o {titulo}</label>
            <input id={idInput} className={classeInput} onChange={funcaoPegar} pattern={pattern} type={tipo} min="1" step=".01"/>
            <p id={idP}>Espera aí! Esse {titulo} está na formatação errada!</p>
            <br/>
        </div>
    )
}

