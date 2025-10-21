interface Props {
  styles?: string;
  handleClick: ()=>void;
}

export const Button = ({ styles='', handleClick }: Props) => {

  return (
    <button onClick={handleClick} className={`${styles} bg-Orange-700 text-Neutral-900 text-center py-4 rounded-xl text-xl font-bold hover:bg-Orange-500 cursor-pointer w-full`}>Generate My Ticket</button>
  )
}