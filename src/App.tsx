import { Header, Hero, Form } from './components'

function App() {

  return (
    <main className='w-[375px] px-4 py-8 '>
      <Header styles='mb-10' />
      <Hero styles='mb-10' />
      <Form />
      <img 
        alt="patterns-lines" 
        src="/images/pattern-lines.svg" 
        className='absolute inset-0 mx-auto min-w-5xl -z-10'
      />
    </main>
  )
}

export default App
