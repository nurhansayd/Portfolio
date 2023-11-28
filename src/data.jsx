import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import toursImg from './assets/images/tours.png';
import TabsImg from './assets/images/tabs.png';
import backroadsImg from './assets/images/backroads.png';
import colorImg from './assets/images/colorgenerator.png';
import menuImg from './assets/images/menu.png';
import reviewsImg from './assets/images/reviews.png';
import todolistImg from './assets/images/todolist.png';
import unsplashImg from './assets/images/unsplashImage.png';
import cartImg from './assets/images/cart.png';
import birthdayImg from './assets/images/birthday.png';
import questionImg from './assets/images/questions.png';
import contentfulImg from './assets/images/contentful.png';
import mixmasterImg from './assets/images/mixmaster.png';
import strapiImg from './assets/images/strapi.png';






export const links = [
  { id: nanoid(), href: '#hero', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },

];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-orange-600' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-amber-300' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-cyan-500 ' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },{
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-lime-500 ' />,
    text: 'Very good knowledge in NodeJS  for facilitate the integration of programming languages with APIs, other languages, and a variety of third-party libraries.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: toursImg,
    url: 'https://tours-truffle-c2c4eb.netlify.app/',
    github: 'https://github.com/nurhansayd/Tours',
    title: 'Tours',
    
  },
  {
    id: nanoid(),
    img: menuImg,
    url: 'https://menu-426fb4.netlify.app/',
    github: 'https://github.com/nurhansayd/FoodMenu',
    title: 'Menu',
    
  },
  {
    id: nanoid(),
    img: questionImg,
    url: 'https://questions-206813.netlify.app/',
    github: 'https://github.com/nurhansayd/Questions',
    title: 'Questions',
  
  },
  {
    id: nanoid(),
    img: backroadsImg,
    url: 'https://backroads-react-app-9900.netlify.app/',
    github: 'https://github.com/nurhansayd/react-backroads',
    title: 'Backroads',

  },
  {
    id: nanoid(),
    img: reviewsImg,
    url: 'https://reviews-43e549.netlify.app/',
    github: 'https://github.com/nurhansayd/Reviews',
    title: 'Reviews',
   
  },
  {
    id: nanoid(),
    img: TabsImg,
    url: 'https://tabs-d66623.netlify.app/',
    github: 'https://github.com/nurhansayd/Tabs',
    title: 'Tabs',
  },
  {
    id: nanoid(),
    img: birthdayImg,
    url: 'https://birthdays-bbb93b.netlify.app/',
    github: 'https://github.com/nurhansayd/BirthdayList',
    title: 'Birthday',
  },
  {
    id: nanoid(),
    img: colorImg,
    url: 'https://colors-generator-09dbd6.netlify.app/',
    github: 'https://github.com/nurhansayd/ColorsGenerator',
    title: 'Color Generator',
  },
  {
    id: nanoid(),
    img: todolistImg,
    url: 'https://to-do-list-2a7cc3.netlify.app/',
    github: 'https://github.com/nurhansayd/ToDoList',
    title: 'To do list',
    
  },
  {
    id: nanoid(),
    img: unsplashImg,
    url: 'https://images-search-676.netlify.app/',
    github: 'https://github.com/nurhansayd/search-image',
    title: 'Unsplash Images',
  },
  {
    id: nanoid(),
    img: contentfulImg,
    url: 'https://contentful-cms-c576e0.netlify.app/',
    github: 'https://github.com/nurhansayd/ContentfulCMS',
    title: 'Contentful',
  },
  {
  id: nanoid(),
  img: mixmasterImg,
  url: 'https://mix-master-02b65c.netlify.app/',
  github: 'https://github.com/nurhansayd/MixMaster',
  title: 'MixMaster',
},
  {
    id: nanoid(),
    img: cartImg,
    url: 'https://cart-1686a0.netlify.app/',
    github: 'https://github.com/nurhansayd/cart',
    title: 'Cart', 
  },
  {
    id: nanoid(),
    img: strapiImg,
    url: 'https://strapi-099195.netlify.app/',
    github: 'https://github.com/nurhansayd/strapi',
    title: 'StrAPI', 
  },
];
