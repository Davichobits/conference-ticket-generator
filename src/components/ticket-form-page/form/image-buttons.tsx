import type { Dispatch, SetStateAction } from 'react'

interface Props {
  setImageUrl: Dispatch<SetStateAction<string>>
}

export const ImageButtons = ({setImageUrl}: Props) => {

  const removeImage = () => {
    setImageUrl('')
  }

  const changeImage = () => {
    console.log('change')
  }

  return (
    <div className='flex justify-center gap-4'>
      <button className='bg-Neutral-300/10 px-2 rounded-lg cursor-pointer hover:bg-Neutral-300/15' onClick={removeImage}>Remove Image</button>
      <button className='bg-Neutral-300/10 px-2 rounded-lg cursor-pointer hover:bg-Neutral-300/15' onClick={changeImage}>Change Image</button>
    </div>
  )
}
