interface Props {
  styles?: string;
}

export const Congrats = ({ styles='' }: Props) => {
  return (
    <>
      <p className={`${styles} text-[30px]/8 text-center font-extrabold mb-6 md:text-6xl md:w-[700px] md:mx-auto`}>Congrats, 
      <span className='bg-linear-to-r from-Orange-500 to-Neutral-0 bg-clip-text text-transparent'>Jonatan</span>
      <span className='bg-linear-to-r from-Orange-500 to-Neutral-0 bg-clip-text text-transparent'> Kristof!</span> 
      Your ticket is ready.</p>

      <p className='text-[19px] text-center mb-20 text-Neutral-300 md:w-[514px] md:mx-auto'>We've emailed your ticket to <span className='text-Orange-500'>jonatan@email.com</span> and will send updates in the run up to the event.</p>
    </>
  )
}