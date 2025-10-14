interface Props {
  styles?: string;
}

export const Header = ({ styles='' }: Props) => {
  return (
    <header className={`${styles}`}>
      <img src="/public/images/logo-full.svg" alt="Logo Coding Conf" />
    </header>
  )
}