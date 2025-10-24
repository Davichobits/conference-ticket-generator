import { 
  useState, 
  type ChangeEvent 
} from 'react';

export const UploadInput = ({...rest}) => {

  const [preview, setPreview] = useState<string | undefined>()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl)
    }

  }

  return (
    <div className='mb-4'>
      <p className='mb-4 text-xl'>Upload Avatar</p>
      <label className='border-3 border-dashed px-4 py-3 block w-full border-Neutral-0 bg-Neutral-700/50 hover:bg-Neutral-700 rounded-xl cursor-pointer mb-2'>
        <div className='bg-Neutral-700 size-[50px] grid place-content-center rounded-xl border-2 border-Neutral-500 mb-2 mx-auto'>
          <img src={preview ? preview : '/images/icon-upload.svg'} alt="icon upload" />
        </div>
        <input
          {...rest}
          onChange={handleFileChange}
          className='hidden'
          type="file"
        />
        <span className='text-center block text-gray-500 text-sm'>Drag and drop or click to upload</span>
      </label>
      <div className='flex gap-2'>
        <img src="/images/icon-info.svg" alt="icon info" />
        <p>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
    </div>
  )
}