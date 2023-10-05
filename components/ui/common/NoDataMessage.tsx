interface NoDataMessageProps {
  message: string;
}

const NoDataMessage: React.FC<NoDataMessageProps> = ({ message }) => {
  return (
    <div className='w-full py-10 text-center text-gray-600'>
      {message}
    </div>
  )
}

export default NoDataMessage