import type { Dispatch, SetStateAction } from 'react'

interface Props {
  setImageUrl: Dispatch<SetStateAction<string>>
}

export const ImageButtons = ({setImageUrl}: Props) => {

  const removeImage = (e: React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault(); 
    setImageUrl('')
  }

  const changeImage = () => {
    setImageUrl('')
  }

  return (
    <div className='flex justify-center gap-4'>
      <button 
        type='button'
        onClick={removeImage}
        className='bg-Neutral-300/10 px-2 rounded-lg cursor-pointer hover:bg-Neutral-300/15' 
        >
          Remove Image
        </button>
      <button
        type='button'
        onClick={changeImage}
        className='bg-Neutral-300/10 px-2 rounded-lg cursor-pointer hover:bg-Neutral-300/15'
      >
        Change Image
      </button>
    </div>
  )
}
