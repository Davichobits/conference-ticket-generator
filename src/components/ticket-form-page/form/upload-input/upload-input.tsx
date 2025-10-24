import { useCallback, useState } from 'react';
import { ImageFormats } from './image-formats';
import { UploadIcon } from './upload-icon';
import { useDropzone } from 'react-dropzone';

interface CustomFile extends File {
  preview: string;
}

interface Props {
  onFileChange?: (f: File | null) => void;
}

export const UploadInput = ({ onFileChange }: Props) => {
  const [file, setFile] = useState<CustomFile | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        // Solo tomamos el primer archivo
        const newFile = acceptedFiles[0];
        // Limpiar el preview anterior si existe
        if (file) {
          URL.revokeObjectURL(file.preview);
        }
        const assigned = Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        }) as CustomFile;
        setFile(assigned);
        if (onFileChange) onFileChange(assigned);
      }
    },
    [file, onFileChange]
  );

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop });

  const handleRemoveImage = () => {
    if (file) {
      URL.revokeObjectURL(file.preview);
    }
    setFile(null);
    if (onFileChange) onFileChange(null);
  };

  const handleChangeImage = () => {
    open();
  };

  return (
    <>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center w-full px-4 py-3 border-3 border-Neutral-0 border-dashed rounded-xl bg-Neutral-900/50  cursor-pointer mb-3 overflow-hidden ${
          !file && 'hover:bg-Neutral-500/50'
        } mb-6`}
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          {file ? (
            <>
              <img
                src={file.preview}
                alt='preview'
                className='size-[50px] rounded-xl border-2 border-Neutral-500  mb-2'
              />
              <div className='flex gap-4'>
                <button
                  onClick={handleRemoveImage}
                  className='bg-Neutral-700/50 px-3 py-1 rounded-lg cursor-pointer hover:underline underline-offset-2'
                >
                  Remove Image
                </button>
                <button
                  onClick={handleChangeImage}
                  className='bg-Neutral-700/50 px-3 py-1 rounded-lg cursor-pointer hover:underline underline-offset-2'
                >
                  Change Image
                </button>
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
        <input
          id='dropzone-file'
          type='file'
          className='hidden'
          {...getInputProps()}
        />
      </div>

      <ImageFormats />
    </>
  );
};
