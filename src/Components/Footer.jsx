/* eslint-disable react/no-unescaped-entities */
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-[#111] text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <img src={Logo} alt='logo' width={70} />
          <p className='text-[16px] my-4 font-semibold'>
            I'm ready to collaborate!
          </p>
        </div>
        <div>
          <h2 className='text-[22px] font-bold text-emerald-500 uppercase'>
            Services
          </h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>E-commerce</li>
          </ul>
        </div>
        <div>
          <h2 className='text-[22px] font-bold text-emerald-500 uppercase'>
            Follow me
          </h2>
          <div className='flex space-x-4 my-3'>
            <a
              className='text-white hover:text-emerald-700 transition-all duration-150 ease-in-out'
              href='https://github.com/PyaePhoneMyat'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              className='text-white hover:text-emerald-700 transition-all duration-150 ease-in-out'
              href='https://www.linkedin.com/in/pyae-phone-myat/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>
            <a
              className='text-white hover:text-emerald-700 transition-all duration-150 ease-in-out'
              href='https://www.facebook.com/pyae.myat.1293'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook />
            </a>
            <a
              className='text-white hover:text-emerald-700 transition-all duration-150 ease-in-out'
              href='https://www.instagram.com/boi_chrizz/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-bold text-emerald-500 uppercase'>
            Contact
          </h2>
          <p className='text-[16px] my-4 tracking-wider'>
            Email:
            <a href='mailto:devppm23@gmail.com'>devppm23@gmail.com</a>
          </p>
          <p className='text-[16px] my-4 tracking-wider'>
            Ph: +95 9777 271 994
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
