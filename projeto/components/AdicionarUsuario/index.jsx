import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listadeUsuarios, setListaDeUsuarios] = useState([])

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            // Correção: Espalhar a variável de estado 'listadeUsuarios' e não a função
            setListaDeUsuarios([...listadeUsuarios, { nome, email }])
            setNome('')
            setEmail('')
        }
    }

    // Correção: O return agora está dentro da função AdicionarUsuario
    return (
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                />

                <input 
                    type="text"
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />

                {/* Correção de digitação de "Adiconar" para "Adicionar" */}
                <button type='submit'>Adicionar</button>
            </form>

            <br />

            <h2>Usuários Adicionados</h2>
            <ul>
                {listadeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )
} // A chave de fechamento do componente deve ficar aqui no final!