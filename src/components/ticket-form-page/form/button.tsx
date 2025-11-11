interface Props {
  styles?: string;
}

export const Button = ({ styles='' }: Props) => {

  return (
    <button type='submit' className={`${styles} bg-Orange-700 text-Neutral-900 text-center py-4 rounded-xl text-xl font-bold hover:bg-Orange-500 cursor-pointer w-full`}>Generate My Ticket</button>
  )
}