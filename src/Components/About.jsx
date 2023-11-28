import aboutSvg from '../assets/undraw4.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className=' py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About' />
          <p className='text-slate-600 mt-8 leading-loose'>
          Graduated from faculty of computer and information science Ain Shams University -Senior year 2021- 
           with 2 years experience in <b>software development</b>
          <br></br>
          Full-Stack web development trainee using MERN stack at Information Technology Institute (ITI)
           <br></br>

          Seeking a challenging software engineering role in high-professional environment using MERN
           technologies to solve problems and create new products that could enable me advance my 
           expertise in web development while contributing to innovative solutions and cutting-edge technology.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
