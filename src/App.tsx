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
    <main className='px-4 py-8 bg-[url(/images/background-mobile.png)] bg-bottom bg-cover relative min-h-screen md:bg-[url(/images/background-tablet.png)] pb-[100px] overflow-hidden md:px-8 md:py-10'>

      <img
          src="/images/pattern-squiggly-line-top.svg"
          alt="pattern squiggly line top"
          className='absolute top-4 h-[52px] right-0'
        />

      <section className='relative'>
        
        <Header styles='mb-10' />
        

        {
          isShow 
          ? ( <section>
                <Congrats />
                <TicketGenerated /> 
              </section>)
            : (
              <section>
                <Hero styles='mb-10' />
                <Form styles='md:max-w-[522px] md:mx-auto' setIsShow={handleClick} />
              </section>
            )}
      </section>

      <img 
        alt="patterns-lines" 
        src="/images/pattern-lines.svg" 
        className='absolute inset-0 mx-auto min-w-5xl -z-0'
      />

      <img
          src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt="pattern squiggly line top"
          className='absolute bottom-0 h-[200px] left-0'
        />

    </main>
  )
}

export default App
