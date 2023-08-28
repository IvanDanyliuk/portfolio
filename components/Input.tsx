import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

const Input = ({  
  name, 
  label, 
  type,
  register, 
  registerOptions, 
  error, 
  ...props 
}: InputProps) => {
  return (
    <div className='field-container'>
      <label htmlFor={name} className='field-label'>
        {error ? error.message : label}
      </label>
      <input 
        id={name} 
        type={type ? type : 'text'} 
        {...props} 
        {...register(name, registerOptions)} 
        className='field'
      />
    </div>
  )
}

export default Input