interface ButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ title, type, onClick }: ButtonProps) => {
  return (
    <button className='btn w-52' type={type ? type : 'button'} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button