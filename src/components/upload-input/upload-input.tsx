import { useEffect, useState } from 'react';
import { ImageFormats } from './image-formats';
import { UploadIcon } from './upload-icon';

interface Props {
  styles?: string;
}

export const UploadInput = ({ styles = '' }: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      // cleanup on unmount
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // revoke previous preview if any
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
  event.preventDefault();
};

const handleFileDrop = (event: React.DragEvent<HTMLLabelElement>) => {
  event.preventDefault();
  if (event.dataTransfer.files && event.dataTransfer.files[0]) {
    const file = event.dataTransfer.files[0];
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }
};

  return (
    <div className={`${styles}`}>
      <label
        htmlFor='dropzone-file'
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
        className='flex flex-col items-center justify-center w-full px-4 py-3 border-3 border-Neutral-0 border-dashed rounded-xl bg-Neutral-900/50 hover:bg-Neutral-500 cursor-pointer mb-3 overflow-hidden'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          {previewUrl ? (
            <>
              <img src={previewUrl} alt='preview' className='size-[50px] rounded-xl border-2 border-Neutral-500  mb-2' />
              <div className='flex gap-4'>
                <button className='bg-Neutral-700/50 px-3 py-1 rounded-lg cursor-pointer hover:underline'>Remove Image</button>
                <button className='bg-Neutral-700/50 px-3 py-1 rounded-lg cursor-pointer hover:underline'>Change Image</button>
              </div>
            </>
          ) : (
            <>
              <UploadIcon />
              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                Drag and drop or click to upload
              </p>
            </>
          )}
        </div>
        <input id='dropzone-file' type='file' accept='image/*' className='hidden' onChange={handleFileChange} />
      </label>
      <ImageFormats />
    </div>
  );
};
