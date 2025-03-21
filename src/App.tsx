import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
    <div className='bg-white h-screen'>
      <Header />
      <section className='flex items-center flex-col'>
        <div className='flex items-center'>
          <div className='text-justify p-25 w-1/2 text-md text-black font-serif'>
            <div className='rounded-xl border-1 bg-neutral-50'>
              <div className='p-4'>
                <h3 className='ml-5 border-b-1 text-4xl'>About me</h3>
                <p className='border-l-4 p-2 leading-relaxed pl-4'>
                  I'm Rafael Ortiz Nunes, 20y developer. I like Computer Science, Philosophy, Literature and High Performance.
                  But also, firstly, I like to learn :)
                </p>
                <p className='border-l-4 p-2 leading-relaxed pl-4'>
                  The theory and practice of Software Engineering is fascinating and that is a mountain that must be climbed.
                  It's all about learn how to learn and fly, being light and look at where we are.
                </p>

              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center text-black font-serif font-bold'>
            <h3 className='text-3xl'>Posts</h3>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
            <div>aaaaa</div>
          </div>
        </div>
        <div className='font-serif'>
          <h3 className='text-3xl'>Reads</h3>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
