interface Props {
  styles?: string;
}

export const Button = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} bg-Orange-700 text-Neutral-900 text-center py-4 rounded-xl text-xl font-bold hover:bg-Orange-500 cursor-pointer`}>Generate My Ticket</div>
  )
}