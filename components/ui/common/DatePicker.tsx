import { Controller, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

const DatePicker = ({  
  name, 
  label, 
  type,
  control,
  register, 
  registerOptions, 
  error, 
  ...props 
}: InputProps) => {
  return (
    <div className={type === 'checkbox' ? 'checkbox' : 'field'}>
      <label htmlFor={name}>
        {error ? error.message : label}
      </label>
      <Controller 
        control={control}
        name={name}
        render={({ field }: any) => (
          <ReactDatePicker 
            selected={field.value}
            onChange={(e) => field.onChange(e)}
            dateFormat='dd.MM.yyyy'
            className='w-full'
          />
        )}
      />
    </div>
  )
}

export default DatePicker