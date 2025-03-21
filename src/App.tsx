import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {

  return (
    <div>
      <Header/>
      <main>
        <div className='text-justify flex flex-col justify-center items-center mx-auto p-8'>
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
      <Footer/>
    </div>
  )
}

export default App
