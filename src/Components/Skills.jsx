import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';
const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillStyle =
    'text-[26px] flex items-center justify-center font-semibold text-emerald-400 rounded-3xl h-36 w-44 border-2 border-emerald-600 b_glow';

  return (
    <div
      className='p-20 flex flex-col items-center justify-center '
      id='Skills'
    >
      <h1
        data-aos='fade-down'
        className='text-[52px] font-semibold mb-20 leading-normal uppercase text-emerald-400 m-auto'
      >
        Skills
      </h1>
      <div
        data-aos='fade-right'
        className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20'
      >
        <h2 className={skillStyle}>
          <FaHtml5 className='mr-1' />
          HTML
        </h2>
        <h2 className={skillStyle}>
          <FaCss3 className='mr-1' />
          CSS
        </h2>
        <h2 className={skillStyle}>
          <RiJavascriptFill className='mr-1' />
          Javascript
        </h2>
        <h2 className={skillStyle}>
          <FaReact className='mr-1' />
          React
        </h2>
        <h2 className={skillStyle}>
          <SiTailwindcss className='mr-1' />
          Tailwind
        </h2>
        <h2 className={skillStyle}>
          <SiStrapi className='mr-1' />
          Strapi
        </h2>
      </div>
    </div>
  );
};

export default Skills;
