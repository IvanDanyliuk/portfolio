import { Control, Controller, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

interface SelectProps {
  name: string;
  label?: string;
  control: Control<any>,
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  defaultValue?: string;
  required?: boolean;
  error?: FieldError;
  options: {
    label: string;
    value: string;
  }[];
  [x: string]: any;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  control,
  register,
  registerOptions,
  defaultValue,
  required,
  error,
  options,
  ...props
}) => {
  return (
    <div className='field'>
      <label htmlFor={name}>
        {error ? error.message : label}
      </label>
      <Controller 
        name={name}
        defaultValue={defaultValue ? defaultValue : ''}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <select 
            
            {...field}
          >
            {options.map(item => (
              <option key={uuid()} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  )
}

export default Select