interface Props {
  styles?: string;
}

export const ImageFormats = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} flex gap-2`}>
      <img src="/images/icon-info.svg" alt="icon info" />
      <p className='text-xs'>
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
  )
}