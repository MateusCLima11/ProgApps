import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listadeUsuarios, setListaDeUsuarios] = useState([])

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            setListaDeUsuarios([...setListaDeUsuarios,{nome,email}])
            setNome('')
            setEmail('')

        }
    }
}

    return (
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input type="text"
                placeholder='Nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)} />

                <input type="text"
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'>Adiconar</button>
            </form>

            <br />

            <h2>Usuários Adicionados</h2>
            <ul>
                {listadeUsuarios.map((usuario,index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )