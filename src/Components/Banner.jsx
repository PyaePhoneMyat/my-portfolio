import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Hero from '../assets/hero.jpg';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 800,
    });
  }, []);
  return (
    <div
      data-aos='fade-up'
      className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'
      id='Home'
    >
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white '>
        <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase'>
          Welcome To<span className='text-emerald-400'> My Portfolio</span>
        </h1>
        <p className='text-lg'>
          I&#39;m a passionate{' '}
          <span className='text-xl text-emerald-400 font-bold'>
            Junior Frontend React Developer
          </span>{' '}
          with a love for crafting seamless and engaging user experiences.I
          would like to develop cool UI/UX websites with good team-work skills.
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <a
                href='https://github.com/PyaePhoneMyat'
                target='_blank'
                className='text-emerald-500 hover:text-emerald-300 rounded-full glow p-2'
                rel='noreferrer'
              >
                <AiFillGithub className='text-[28px]' />
              </a>
            </div>
            <div className='flex space-x-2'>
              <a
                href='https://www.linkedin.com/in/pyae-phone-myat/'
                target='_blank'
                className='text-emerald-500 hover:text-emerald-300 rounded-full glow p-2'
                rel='noreferrer'
              >
                <FaLinkedin className='text-[28px]' />
              </a>
            </div>
            <div className='flex space-x-2'>
              <a
                href='https://www.facebook.com/pyae.myat.1293'
                target='_blank'
                className='text-emerald-500 hover:text-emerald-300 rounded-full glow p-2'
                rel='noreferrer'
              >
                <FaFacebook className='text-[28px]' />
              </a>
            </div>
            <div className='flex space-x-2'>
              <a
                href='https://www.instagram.com/boi_chrizz/'
                target='_blank'
                rel='noreferrer'
                className='text-emerald-500 hover:text-emerald-300 rounded-full glow p-2'
              >
                <FaInstagram className='text-[28px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Hero}
        width={290}
        height={290}
        className='rounded-full border-2 p-1 border-emerald-500 img_glow'
        alt='My Pic'
      />
    </div>
  );
};

export default Banner;
