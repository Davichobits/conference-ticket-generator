interface Props {
  styles?: string;
}

export const TicketGenerated = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} bg-[url(images/pattern-ticket.svg)] bg-contain h-[160px] p-6 relative`}>

      <img src="/public/images/logo-full.svg" alt="logo full" />
      <p>Jan 31, 2025 / Austing, TX</p>

      <div className='flex'>
        <img 
          alt="imageavatar"
          src="/public/images/image-avatar.jpg"
          className='w-14'
        />
        <div>
          <p>Jontan Kristof</p>
          <p className='flex'>
            <img src="/images/icon-github.svg" alt="" />
            <span>@jonatankristof0101</span>
          </p>
        </div>
      </div>

        <p className='text-2xl absolute rotate-90 top-15 right-0 text-Neutral-500'>#01609</p>

    </div>
  )
}