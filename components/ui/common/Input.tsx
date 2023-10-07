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
    <div className={type === 'checkbox' ? 'checkbox' : 'field'}>
      <label htmlFor={name} className={error ? 'text-red-400' : 'text-black'}>
        {error ? error.message : label}
      </label>
      <input 
        id={name} 
        type={type ? type : 'text'} 
        className={error ? 'border-red-400' : 'border-gray-100'}
        {...props} 
        {...register(name, registerOptions)} 
      />
    </div>
  )
}

export default Input