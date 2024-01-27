import { links } from '../data';
import { useState } from 'react';
const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const toggleDropdown = () => {
   setIsOpen(!isOpen);
 };
 return (
<nav className='relative '>
<div className='align-element py-3 flex flex-row  sm:items-center sm:py-5 justify-between bg-slate-50 drop-shadow-md top-0 left-0 right-0  fixed'>
<h2 className='text-3xl font-bold '>
       Port<span className='text-teal-400'>folio</span>
</h2>
<button data-collapse-toggle="navbar-default" onClick={toggleDropdown}  aria-controls="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  aria-expanded="false" >
<span class="sr-only">Open main menu</span>
<svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
</button>


  {isOpen &&(
<div onClick={toggleDropdown} class="absolute right-0 top-12 mt-5 z-10 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1 flex flex-col gap-y-2" role="none">
       {links.map((link) => {
         const { id, href, text } = link;
         return (
<a
             key={id}
             href={href}
             className=' ml-3 capitalize text-m tracking-wide hover:text-teal-400 duration-300 '>
             {text}
</a>
         );
       })}
</div>
</div>
   )}



<div className=' gap-x-3 hidden md:block ' id="navbar-default">
       {links.map((link) => {
         const { id, href, text } = link;
         return (
<a
             key={id}
             href={href}
             className=' ml-3 capitalize text-m tracking-wide hover:text-teal-400 duration-300 font-semibold'>
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