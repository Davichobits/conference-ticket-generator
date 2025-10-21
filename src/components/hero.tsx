interface Props {
  styles?: string;
}

export const Hero = ({ styles='' }: Props) => {
  return (
    <div className={`${styles}`}>
      <h2 className='text-3xl text-center font-extrabold mb-5 md:text-6xl md:w-[700px]'>Your Journey to Coding Conf 2025 Starts Here!</h2>
      <p className='text-center text-xl text-Neutral-500 font-medium md:text-2xl'>Secure your spot at next year’s biggest coding conference.</p>
    </div>
  )
}