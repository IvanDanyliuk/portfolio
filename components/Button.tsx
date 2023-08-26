interface ButtonProps {
  title: string;

  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className='' onClick={onClick}>
      {title}
    </button>
  )
}

export default Button