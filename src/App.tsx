import { useState } from 'react'
import { 
  Header, 
  Hero, 
  Form, 
  Congrats,
  TicketGenerated 
} from './components'

function App() {

  const [isShow, setIsShow] = useState<boolean>(false)

  const handleClick = () => {
    setIsShow(prevState => !prevState)
  }

  return (
    <main className='px-4 py-8 bg-[url(/images/background-mobile.png)] bg-bottom bg-cover relative'>

      <img
          src="/images/pattern-squiggly-line-top.svg"
          alt="pattern squiggly line top"
          className='absolute top-0 h-[52px] right-0'
        />

      <section className='relative mb-[100px]'>
        
        <Header styles='mb-10' />
        

        {
          isShow 
          ? ( <>
                <Congrats />
                <TicketGenerated /> 
              </>)
            : (
              <>
                <Hero styles='mb-10' />
                <Form setIsShow={handleClick} />
              </>
            )}
      </section>

      <img 
        alt="patterns-lines" 
        src="/images/pattern-lines.svg" 
        className='absolute inset-0 mx-auto min-w-5xl -z-10'
      />
    </main>
  )
}

export default App
