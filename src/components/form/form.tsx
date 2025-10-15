import { UploadInput } from './upload-input/upload-input';
import { Input } from './input';
import { Button } from './button';

interface Props {
  styles?: string;
}

export const Form = ({ styles='' }: Props) => {
  return (
    <form className={`${styles}`}>
      <UploadInput styles='mb-6' />
      <div className='flex flex-col gap-6 mb-6'>
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
      <Button />
    </form>
  )
}