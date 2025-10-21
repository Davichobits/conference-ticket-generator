interface Props {
  styles?: string;
}

export const TicketGenerated = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} bg-[url(images/pattern-ticket.svg)] bg-no-repeat bg-contain w-[342px] h-[160px] m-auto p-4 relative md:w-[600px] md:h-[280px]`}>

      <div className='flex flex-col justify-between h-full'>
        <div>
          <img src="/images/logo-full.svg" alt="logo full" />
          <p className='text-sm text-Neutral-500 ml-12 mb-8'>Jan 31, 2025 / Austing, TX</p>
        </div>
        <div className='flex gap-3'>
          <img
            alt="imageavatar"
            src="/images/image-avatar.jpg"
            className='size-[45px] rounded-lg'
          />
          <div>
            <p className='text-xl font-medium'>Jontan Kristof</p>
            <p className='flex'>
              <img src="/images/icon-github.svg" alt="" />
              <span>@jonatankristof0101</span>
            </p>
          </div>
        </div>
      </div>

      <p className='text-2xl absolute rotate-90 top-15 right-0 text-Neutral-500'>#01609</p>

    </div>
  )
}