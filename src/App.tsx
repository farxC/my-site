import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <div className='container'>
      <Header/>
      <main className='about-me'>
        <div>
          <p>
            I'm Rafael Ortiz Nunes, 20y developer. I like Computer Science, Philosophy, Literature and High Performance.
            But also, firstly I like to learn :)
          </p>
          <p>
             The theory and practice of Software Engineering is fascinating and that is a mountain that must be climbed.
             It's all about learn how to learn and fly, being light and look at where we are.
          </p>
        </div>
      </main>
      <footer className='footer'>
        <p>Data Atual Mato Grosso do Sul, Brasil</p>
        <img src="brasil.png" alt="Bandeira do Brasil" className='brasil-image' />
      </footer>
    </div>
  )
}

export default App
