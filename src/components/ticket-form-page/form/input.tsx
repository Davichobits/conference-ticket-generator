interface Props {
  styles?: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email'
}

export const Input = ({ styles='', label, placeholder, type='text' }: Props) => {
  return (
    <div className={`${styles} flex flex-col`}>
      <label 
        htmlFor={label}
        className='mb-3'
        >{label}</label>
      <input 
        type={type} 
        id={label} 
        placeholder={placeholder}
        className='border border-Neutral-300 rounded-xl h-[54px] px-4 bg-Neutral-700/50'
      />
    </div>
  )
}