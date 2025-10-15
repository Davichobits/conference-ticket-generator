import { 
  Header, 
  Hero, 
  // Form, 
  TicketGenerated 
} from './components'

function App() {

  return (
    <main className='w-[375px] px-4 py-8 bg-[url(/images/background-mobile.png)] bg-bottom bg-cover relative'>

      <img
          src="/public/images/pattern-squiggly-line-top.svg"
          alt="pattern squiggly line top"
          className='absolute top-0 h-[52px] right-0'
        />

      <section className='relative mb-[100px]'>
        
        <Header styles='mb-10' />
        <Hero styles='mb-10' />
        {/* <Form /> */}
        <TicketGenerated />
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
