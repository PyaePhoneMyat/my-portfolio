import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id='About'>
      <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
          <h1
            data-aos='fade-down'
            className='text-[52px] font-semibold mb-8 leading-normal text-emerald-400 uppercase m-auto'
          >
            About Me
          </h1>
          <div data-aos='fade-right'>
            <span className='text-3xl text-emerald-400 font-bold'>
              Here&#39;s Me, Pyae Phone Myat. I&#39;m a Junior Frontend
              Developer.
            </span>
            <p className='mt-2 text-xl'>
              Quick-learner, who loves to code and self-study. Have a strong
              passion to create UI designs into website. I want to learn and
              create best websites with good team. I&#39;m good at communication
              with people and perfom tasks well. I can&#39;t wait to get my
              first job! If you want to know extra informations, please check
              out my resume and send email to me.
            </p>
          </div>
          <div className='flex mt-8 gap-2'>
            <div className='flex items-center justify-center'>
              <div
                data-aos='fade-right'
                className='flex space-x-2 text-xl italic'
              >
                <p>
                  From :
                  <span className=' text-emerald-500'> Yangon, Myanmar.</span>
                </p>
              </div>
              <div className='flex space-x-2 text-xl ml-3 '>
                <a
                  href=''
                  data-aos='fade-left'
                  className='neon-button shadow-xl hover:shadow-emerald-700/50 duration-75 text-white border-2 hover:bg-emerald-600 border-emerald-600 rounded-lg py-4 px-8 uppercase relative overflow-hidden cursor-pointer'
                >
                  resume &#8595;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
// block py-4 mx-auto text-white bg-emerald-500 rounded-xl px-7 hover:bg-emerald-800
