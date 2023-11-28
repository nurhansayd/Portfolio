import { links } from '../data';



const Navbar = () => {

  
  return (
    
    <nav className='relative '>
      <div className='align-element py-3 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-5 justify-between bg-slate-50 drop-shadow-md top-0 left-0 right-0  fixed'>
        <h2 className='text-3xl font-bold '>
          Port<span className='text-teal-400'>folio</span>
        </h2>
        <div className='flex gap-x-3 '>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-m tracking-wide hover:text-teal-400 duration-300 font-semibold'
                
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
