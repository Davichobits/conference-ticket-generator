import { UploadInput } from './upload-input/upload-input';

interface Props {
  styles?: string;
}

export const Form = ({ styles='' }: Props) => {
  return (
    <form className={`${styles}`}>
      <UploadInput />
    </form>
  )
}