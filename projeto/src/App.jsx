import './App.css'
// 1. Ajustei o nome da importação para combinar com o tema de atores
import AdicionarAtor from './components/AdicionarAtor' 
import Header from './components/Header'
// 2. IMPORTANTE: Importar o Footer para não dar erro
import Footer from './components/Footer' 

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        {/* 3. Usando o nome atualizado aqui também */}
        <AdicionarAtor />
      </main>
      <Footer />
    </div>
  )
}

export default App