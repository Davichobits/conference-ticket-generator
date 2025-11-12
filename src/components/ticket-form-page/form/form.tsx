// React
import { useState } from 'react';
// RHF
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
// components
import { UploadInput } from './upload-input/upload-input';
import { Input } from './input';
import { Button } from './button';
// store
import { useUserStore } from '../../../store/user-store';

interface Props {
  styles?: string;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  fullName: string;
  file: FileList;
  email: string;
  githubProfile: string;
};

export const Form = ({ styles = '', setIsShow }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const userStore = useUserStore();

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')

  const sendForm: SubmitHandler<Inputs> = (data) => {
    
    console.log("📦 Archivo desde RHF:", data.file[0])
    console.log("🧠 Archivo desde useState:", selectedFile)

    const file = data.file[0]
    let url = ''

    if (file) {
      url = URL.createObjectURL(file);
    }

    userStore.setUser({
      email: data.email,
      fullName: data.fullName,
      githubUser: data.githubProfile,
      url,
    });
    setIsShow((prevState) => !prevState);
  };

  const getErrorEmailMessage = (): string => {
    if (errors.email?.type === 'required') {
      return errors.email?.message as string;
    } else {
      return 'Please provide a valid email';
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendForm)}
      className={`${styles} relative z-10`}
    >
      <Controller
        name="file"
        rules={{ required: "La imagen es obligatoria" }} // 👈 regla de validación
        control={control}
        render={({ field }) => (
          <UploadInput
          url={imageUrl}
          onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                const url = URL.createObjectURL(file);
                setImageUrl(url);
              }
              setSelectedFile(file || null)  // ✅ guarda en estado local
              field.onChange(e.target.files) // ✅ notifica a RHF
            }}
          />
        )}
      />

      <div className='flex flex-col gap-6 my-6'>
        <Input
          {...register('fullName', {
            required: 'Full Name is required',
          })}
          isError={errors.fullName?.type === 'required'}
          errorMessage={errors.fullName?.message}
          label='Full Name'
          placeholder='Jonathan Kirstof'
        />
        <Input
          {...register('email', {
            required: 'Email address is required',
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
          })}
          isError={
            errors.email?.type === 'required' ||
            errors.email?.type === 'pattern'
          }
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
