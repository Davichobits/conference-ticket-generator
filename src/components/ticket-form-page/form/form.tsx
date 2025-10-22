import { useForm, type SubmitHandler } from 'react-hook-form';
// components
import { UploadInput } from './upload-input/upload-input';
import { Input } from './input';
import { Button } from './button';

interface Props {
  styles?: string;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  fullName: string;
  email: string;
  githubProfile: string;
  file: File | null;
};

export const Form = ({ styles = '', setIsShow }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const sendForm: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    setIsShow((prevState) => !prevState)
  };

  const getErrorEmailMessage = () : string => {
    if(errors.email?.type === 'required'){
      return errors.email?.message as string;
    } else {
      return 'Please provide a valid email';
    }
  }

  return (
    <form
      onSubmit={handleSubmit(sendForm)}
      className={`${styles} relative z-10`}
    >
      <UploadInput
        onFileChange={(f: File | null) => setValue('file', f)}
      />
      <div className='flex flex-col gap-6 my-6'>
        <Input
          {...register('fullName', {
            required: 'Full Name is required',
          })}
          isError={errors.fullName?.type==='required'}
          errorMessage={errors.fullName?.message}
          label='Full Name'
          placeholder='Jonathan Kirstof'
        />
        <Input
          {...register('email', {
            required: 'Email address is required',
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
          })}
          isError={errors.email?.type==='required' || errors.email?.type==='pattern'}
          errorMessage={getErrorEmailMessage()}
          label='Email Address'
          placeholder='jonatan@email.com'
        />
        <Input
          {...register('githubProfile')}
          label='Github Username'
          placeholder='@jonatankristof0101'
        />
      </div>
      <Button />
    </form>
  );
};
