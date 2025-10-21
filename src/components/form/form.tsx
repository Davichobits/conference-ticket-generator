import { UploadInput } from './upload-input/upload-input';
import { Input } from './input';
import { Button } from './button';

interface Props {
  styles?: string;
  setIsShow: ()=>void;
}

export const Form = ({ styles='', setIsShow }: Props) => {
  return (
    <form className={`${styles} relative z-10`}>
      <UploadInput />
      <div className='flex flex-col gap-6 my-6'>
        <Input
          label='Full Name'
          placeholder='Jonathan Kirstof'
        />
        <Input
          label='Email Address'
          placeholder='jonatan@email.com'
        />
        <Input
          label='Github Username'
          placeholder='@jonatankristof0101'
        />
      </div>
      <Button handleClick={setIsShow}  />
    </form>
  )
}