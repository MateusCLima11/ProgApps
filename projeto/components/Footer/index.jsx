import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                {/* Correção: getFullYear() com parênteses para executar a função */}
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br />
                <span className="destaque-militar">SENAI - Bahia</span>
            </p>
        </footer>
    )
}