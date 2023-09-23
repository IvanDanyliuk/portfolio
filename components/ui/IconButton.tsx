import React, { ReactNode, useRef, useState } from 'react'

interface IconButtonProps {
  children: ReactNode;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({ children, label, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<any>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='flex px-4 py-2 items-center rounded-lg text-lg text-white bg-black'
      {...props}
    >
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className='overflow-x-hidden transition-all duration-300 ease-out'
      >
        <span ref={ref} className='pr-2 text-sm'>
          {label}
        </span>
      </div>
      <div className='w-7 h-7 flex justify-center items-center'>
        {children}
      </div>
    </button>
  )
}

export default IconButton