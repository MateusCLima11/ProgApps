import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                {/* {Sempre mostra o ano atualizado} */}
                &copy; {new Date().getFullYear} - Todos os direitos reservados.
                <br />
                SENAI - Bahia
            </p>

        </footer>
    )
}