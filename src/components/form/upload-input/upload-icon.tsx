interface Props {
  styles?: string;
}

export const UploadIcon = ({ styles='' }: Props) => {
  return (
    <div className={`${styles} bg-Neutral-700 size-[50px] grid place-content-center rounded-xl border-2 border-Neutral-500  mb-2`}>
      <img src='/public/images/icon-upload.svg' alt='icon upload' />
    </div>
  )
}