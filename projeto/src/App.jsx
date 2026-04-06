import './App.css'
import AdicionarUsuario from '../components/AdicionarUsuario'
import Footer from '../components/Footer'
import Header from '../components/Header'

function App() {

  return (
    <>
    <div className='app'>
      <Header />
      <main>
        <AdicionarUsuario />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
