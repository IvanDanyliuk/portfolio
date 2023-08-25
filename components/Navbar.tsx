import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex flex-between gap-7'>
        <li>
          <Link href='/' className='nav-link'>HOME</Link>
        </li>
        <li>
          <Link href='/about' className='nav-link'>ABOUT</Link>
        </li>
        <li>
          <Link href='/projects' className='nav-link'>PROJECTS</Link>
        </li>
        <li>
          <Link href='/contact' className='nav-link'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar