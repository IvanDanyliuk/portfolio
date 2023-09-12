interface ButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (arg?: any) => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <button className='btn w-52 custom-btn' type={type ? type : 'button'} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button