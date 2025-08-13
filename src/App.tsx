import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { Title } from './components/Title'

function App() {
  return (
    <div className='bg-white h-screen'>
      <Header />
      <main className='flex items-center flex-col'>
        <Section>
        <Title title='Posts' className='mt-10 mb-5' />

        </Section>
        <Section>
          <Title title='Reads' className='mt-10 mb-5' />
        </Section>
        <Section>
          <Title title='Projects' className='mt-10 mb-5' />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
