import { ChangeEvent } from 'react';
import { Controller, Control, SetFieldValue } from 'react-hook-form';

interface FileUploadFieldProps {
  name: string;
  label?: string;
  control: Control<any>;
  setError: any;
  setValue: SetFieldValue<any>;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({ name, label, control, setError, setValue }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if(!file?.type.includes('image')) {
      setError(name, { message: 'Upload an image!' });
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const result = reader.result as string;
      setValue(name, result);
    }
  }

  return (
    <div className='field'>
      <label htmlFor='input'>
        {label}
      </label>
      <Controller 
        name={name}
        control={control}
        render={({ field: { value, ...field } }) => (
          <input 
            {...field}
            type='file'
            ref={field.ref}
            onChange={(e: any) => {
              handleImageChange(e);
              field.onChange(e);
            }}
          />
        )}
      />
    </div>
  )
}

export default FileUploadField