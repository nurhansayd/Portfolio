import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-slate-50'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold '>
          Port<span className='text-teal-400'>folio</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-teal-400 duration-300 font-semibold'
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
