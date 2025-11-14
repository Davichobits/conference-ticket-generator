import { InfoIcon } from '../../../info-icon';

interface Props {
  url?: string;
  isError: boolean;
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadInput = ({
  url='',
  isError,
  errorMessage = '',
  onChange,
  ...rest
}: Props) => {

  return (
    <div className='mb-4'>
      <p className='mb-4 text-xl'>Upload Avatar</p>
      <label className='border-3 border-dashed px-4 py-3 block w-full border-Neutral-0 bg-Neutral-700/50 hover:bg-Neutral-700 rounded-xl cursor-pointer mb-1'>
        <div className='bg-Neutral-700 size-[50px] grid place-content-center rounded-xl border-2 border-Neutral-500 mb-2 mx-auto'>
          <img src={url ? url : '/images/icon-upload.svg'} alt="icon upload" />
        </div>
        <input
          {...rest}
          onChange={onChange}
          className='hidden'
          type="file"
        />
        <span className='text-center block text-gray-500 text-sm'>Drag and drop or click to upload</span>
      </label>
        {
          isError ? 
            <p className='flex items-center gap-1 text-Orange-700'>
              <InfoIcon />
              <span>{errorMessage}</span>
            </p>
          :
            <div className='flex gap-2'>
              <InfoIcon />
              <p>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
        }
    </div>
  )
}