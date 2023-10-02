interface ButtonProps {
  title: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (arg?: any) => void;
}

const Button: React.FC<ButtonProps> = ({ title, width, type, onClick }) => {
  return (
    <button 
      className={`btn w-${width ? width : '52'} custom-btn`} 
      type={type ? type : 'button'} 
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button