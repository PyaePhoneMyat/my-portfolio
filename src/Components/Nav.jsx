import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import Logo from '../assets/logo.png';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    console.log('handleclick= ', click);
    setClick(!click);
  };

  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const ogNavStyle =
    'hover:text-emerald-400 transition border-b-2 border-black hover:border-emerald-400 cursor-pointer';
  const stickyNavStyle =
    'hover:text-emerald-400 transition border-b-2 border-[#222] hover:border-emerald-400 cursor-pointer';
  const mobNavStyle =
    'my-4 py-4 border-b border-emerald-800 hover:bg-emerald-800 hover:rounded';

  useEffect(() => {
    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);

  const content = (
    <>
      <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-black transition '>
        <ul className='text-center text-xl p-20'>
          <Link spy={true} smooth={true} to='Home'>
            <li className={mobNavStyle} onClick={handleClick}>
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to='About'>
            <li className={mobNavStyle} onClick={handleClick}>
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to='Skills'>
            <li className={mobNavStyle} onClick={handleClick}>
              Skills
            </li>
          </Link>
          <Link spy={true} smooth={true} to='Projects'>
            <li className={mobNavStyle} onClick={handleClick}>
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav
      className={header ? 'fixed w-[100%] bg-[#222] z-10' : 'bg-transparent'}
    >
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 sticky'>
        <div className='flex items-center flex-1'>
          <img src={Logo} alt='logo' width={50} />
        </div>
        <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link spy={true} smooth={true} to='Home'>
                <li className={header ? stickyNavStyle : ogNavStyle}>Home</li>
              </Link>
              <Link spy={true} smooth={true} to='About'>
                <li className={header ? stickyNavStyle : ogNavStyle}>About</li>
              </Link>
              <Link spy={true} smooth={true} to='Skills'>
                <li className={header ? stickyNavStyle : ogNavStyle}>Skills</li>
              </Link>
              <Link spy={true} smooth={true} to='Projects'>
                <li className={header ? stickyNavStyle : ogNavStyle}>
                  Projects
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
