import { useState } from 'react'
import './style.css'

export default function AdicionarElenco() {
    const [nome, setNome] = useState('')
    const [papel, setPapel] = useState('') // Alterado de email para papel
    const [listaElenco, setListaElenco] = useState([])

    const handlerAdicionarAtor = (event) => {
        event.preventDefault()
        
        if (nome && papel) {
            // Adiciona o novo objeto com nome e papel à lista
            setListaElenco([...listaElenco, { nome, papel }])
            
            // Limpa os campos após a inserção
            setNome('')
            setPapel('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar ao Elenco</h2>
            <form onSubmit={handlerAdicionarAtor}>
                <input 
                    type="text"
                    placeholder='Nome do Ator/Atriz'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} 
                />

                <input 
                    type="text"
                    placeholder='Papel / Personagem'
                    value={papel}
                    onChange={(e) => setPapel(e.target.value)} 
                />

                <button type='submit'>Adicionar ao Elenco</button>
            </form>

            <br />

            <h2>Elenco Escalado</h2>
            <ul>
                {listaElenco.map((ator, index) => (
                    <li key={index}>
                        <strong>{ator.nome}</strong> as {ator.papel}
                    </li>
                ))}
            </ul>
        </div>
    )
}