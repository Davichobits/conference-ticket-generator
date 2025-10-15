interface Props {
  styles?: string;
}

export const Header = ({ styles='' }: Props) => {
  return (
    <header className={`${styles} flex justify-center`}>
      <img src="/images/logo-full.svg" alt="Logo Coding Conf" />
    </header>
  )
}