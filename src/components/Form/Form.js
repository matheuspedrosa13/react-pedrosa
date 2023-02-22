import './Form.less'
import { Input } from '../Input'
import { useState } from 'react'
import axios from 'axios'

export function Form(){
    const [inptId, setInptId] = useState('')
    const [inptNome, setInptNome] = useState('')
    const [inptPreco, setInptPreco] = useState('')
    const [inptEmail, setEmail] = useState('')


    function handleSubmit(){
        console.log(inptId)
    }

    function handleSubmit2(){
        console.log(inptNome)
    }
    function handleSubmit3(){
        console.log(inptPreco)
    }
    function handleSubmit4(){
        handleSubmit()
        handleSubmit2()
        handleSubmit3()
        console.log(inptEmail)
        
        console.log({
            id_produto: inptId,
            nome_produto: inptNome,
            preco_produto: inptPreco,
            email: inptEmail
        })

        function inpt(){
        axios.post('http://127.0.0.1:8000/adicionarprodutos', {
            id_produto: inptId,
            nome_produto: inptNome,
            preco_produto: inptPreco,
            email: inptEmail
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        }
        inpt()
    }
    
    return (
        <form className='divInputs'>
            <Input titulo={"ID"} idP={'pId'} pattern={"[0-9]+$"} classeInput={'id'} idInput={'id'} funcaoPegar={(e) => setInptId(e.target.value)} tipo={"number"} />

            <Input titulo={"nome"} idP={'pNome'} pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$"} tipo={"text"} classeInput={'inpt'} idInput={'nome'} funcaoPegar={(e) => setInptNome(e.target.value)}/>

            <Input titulo={"preço"} idP={'pPreco'} pattern={"[0-9]+$"} tipo={"number"} classeInput={'inpt'} idInput={'preco'} funcaoPegar={(e) => setInptPreco(e.target.value)}/>

            <Input titulo={"email"} idP={'pEmail'} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$"} tipo={"email"} classeInput={inptEmail === "" ? "vazio" : "inptEm"} idInput={'email'} funcaoPegar={(e) => setEmail(e.target.value)}/>   

            <button type='button' onClick={handleSubmit4}>Adicionar</button>
        </form>
    )
}

