interface Props {
  styles?: string;
}

export const TicketGenerated = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} bg-[url(images/pattern-ticket.svg)] bg-no-repeat bg-contain w-[342px] h-[160px] m-auto p-4 relative md:w-[600px] md:h-[280px] md:py-[30px] md:px-6`}>

      <div className='flex flex-col justify-between h-full'>
        <div>
          <img className='md:w-[240px]' src="/images/logo-full.svg" alt="logo full" />
          <p className='text-sm text-Neutral-500 ml-12 mb-8 md:text-lg'>Jan 31, 2025 / Austing, TX</p>
        </div>
        <div className='flex gap-3'>
          <img
            alt="imageavatar"
            src="/images/image-avatar.jpg"
            className='size-[45px] rounded-lg md:size-[80px]'
          />
          <div>
            <p className='text-xl font-medium md:text-3xl'>Jontan Kristof</p>
            <p className='flex'>
              <img src="/images/icon-github.svg" alt="" />
              <span className='md:text-xl'>@jonatankristof0101</span>
            </p>
          </div>
        </div>
      </div>

      <p className='text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-Neutral-500 md:right-4 md:text-3xl'>#01609</p>

    </div>
  )
}