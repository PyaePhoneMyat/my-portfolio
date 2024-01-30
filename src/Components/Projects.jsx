import diceGame from '../assets/dice_game.png';
import foodOrder from '../assets/food_order.png';
import hoobank from '../assets/hoo_bank.png';
import pokemonCatch from '../assets/pokemon_catch.png';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectStyle =
    'text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-emerald-600 b_glow hover:scale-110 transition-all';

  return (
    <div
      id='Projects'
      className='p-20 flex flex-col items-center justify-center'
    >
      <h1
        data-aos='fade-right'
        className='text-[52px] font-semibold mb-20 leading-normal uppercase text-emerald-400 m-auto md:mr-0.5rem'
      >
        Projects
      </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
        <div data-aos='fade-down'>
          <a
            href='https://pokemon-catch-theta.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              height={350}
              width={250}
              className={projectStyle}
              src={pokemonCatch}
              alt='pokemonCatch'
            />
          </a>

          <p className='uppercase text-emerald-400 text-xl font-bold text-center mt-2'>
            Pokemon Catch
          </p>
        </div>
        <div data-aos='fade-up'>
          <a
            href='https://pyaephonemyat.github.io/Food-Order/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              height={350}
              width={250}
              className={projectStyle}
              src={foodOrder}
              alt='foodOrder'
            />
            <p className='uppercase text-emerald-400 text-xl font-bold text-center mt-2'>
              Food order
            </p>
          </a>
        </div>
        <div data-aos='fade-down'>
          <a
            href='https://pyaephonemyat.github.io/pig-game/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              height={350}
              width={250}
              className={projectStyle}
              src={diceGame}
              alt='diceGame'
            />
            <p className='uppercase text-emerald-400 text-xl font-bold text-center mt-2'>
              Dice Game
            </p>
          </a>
        </div>
        <div data-aos='fade-up'>
          <a
            href='https://bank-modern-web.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              height={350}
              width={250}
              className={projectStyle}
              src={hoobank}
              alt='hoobank'
            />
            <p className='uppercase text-emerald-400 text-xl font-bold text-center mt-2'>
              Modern Bank Web
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
