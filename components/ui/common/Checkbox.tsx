interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange?: (e: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className='flex justify-between'>
      <label htmlFor={label} className='py-1.5'>
        {label}
      </label>
      <input id={label} type='checkbox' checked={checked} onChange={onChange} />
    </div>
  )
}

export default Checkbox