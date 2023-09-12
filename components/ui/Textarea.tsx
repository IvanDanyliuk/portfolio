import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface TextareaProps {
  name: string;
  label?: string;
  rows?: number;
  maxLength?: number;
  minLength?: number;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

const Textarea = ({  
  name, 
  label, 
  rows, 
  maxLength, 
  minLength, 
  register, 
  registerOptions, 
  error, 
  ...props 
}: TextareaProps) => {
  return (
    <div className='field'>
      <label htmlFor={name}>
        {error ? error.message : label}
      </label>
      <textarea 
        id={name} 
        {...props} 
        {...register(name, registerOptions)} 
      />
    </div>
  )
}

export default Textarea