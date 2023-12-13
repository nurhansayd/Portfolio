import heroImg from '../assets/undraw2.svg';
import { FaGithubSquare, FaLinkedin ,FaEnvelope} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-sky-100 py-24' id='hero'>
      <div className='align-element  grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h5 className='text-4xl font-bold tracking-wider '>Nurhan Sayed</h5>
          <p className='mt-4 text-2xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
         
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/nurhansayd'  target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/nurhan-sayed-5896a7211/' target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='mailto:nurhansaydd@gmail.com' target='_blank'>
              <FaEnvelope className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
