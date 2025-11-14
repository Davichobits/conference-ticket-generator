import { InfoIcon } from '../../info-icon';

interface Props {
  styles?: string;
  label: string;
  placeholder: string;
  errorMessage?: string;
  isError?: boolean;
  type?: 'text' | 'email';
}

export const Input = ({
  styles = '',
  label,
  placeholder,
  type = 'text',
  errorMessage = '',
  isError = false,
  ...rest
}: Props) => {
  return (
    <div className={`${styles} flex flex-col`}>
      <label htmlFor={label} className='mb-3'>
        {label}
      </label>
      <input
        {...rest}
        type={type}
        id={label}
        placeholder={placeholder}
        className='border border-Neutral-300 rounded-xl h-[54px] px-4 bg-Neutral-700/50 mb-1'
      />
      {
        isError && (
          <p className='flex items-center gap-1 text-Orange-700'>
            <InfoIcon />
            <span>{errorMessage}</span>
          </p>
        )
      }
    </div>
  );
};
