interface Props {
  styles?: string;
}

export const Congrats = ({ styles='' }: Props) => {
  return (
    <>
      <p className={`${styles} text-[30px]/8 text-center font-extrabold mb-6`}>Congrats, <span>Jonatan Kristof!</span> Your ticket is ready.</p>

      <p className='text-[19px] text-center mb-20 text-Neutral-300'>We've emailed your ticket to <span className='text-Orange-500'>jonatan@email.com</span> and will send updates in the run up to the event.</p>
    </>
  )
}