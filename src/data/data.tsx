import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Gai Ashkenazy Online Resume',
  description: "Gai Ashkenazy Online Resume - Open to job offers",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Gai Ashkenazy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Tel Aviv based <strong className="text-stone-100">Backend Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Via Transportation</strong> helping them to build a modern, huge scale,
        intelligent and data driven smart transit tech.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">soccer</strong>,
        playing my <strong className="text-stone-100">guitar</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Tel Aviv beaches</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `👋 Hey there! I'm Gai Ashkenazy, a passionate software developer with a knack for crafting elegant code 
  and building impactful solutions. When I'm not immersed in lines of code, you can usually find me on the soccer 
  field, chasing after the ball and enjoying the beautiful game.
  
  My journey in software development began with a fascination for technology and a drive to create meaningful 
  applications that solve real-world problems. Over the years, I've honed my skills in various programming languages 
  and technologies, from frontend frameworks to backend systems with C++, Go, Python and beyond..`,
  aboutItems: [
    {label: 'Location', text: 'Tel Aviv, Israel', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Finland / Israel', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Soccer, Guitar', Icon: SparklesIcon},
    {label: 'Study', text: 'Washington University in Saint Louis', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Via Transportation, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Finish',
        level: 9,
      },
      {
        name: 'Hebrew',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'Golang',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 5,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/GaiAshk',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2019',
    location: 'Washington University in St. Louis',
    title: 'Bachelor\'s degree, Computer Science',
    content: <p>Graduated at the top of my class, I was very active in the Robotics club, Soccer team, Triathlon Team.
    Worked closely with the dean of the computer science department on Complexity and Computability analysis of
      Quantum Computing</p>,
  },
  {
    date: 'March 2017',
    location: 'Reichman University',
    title: 'Bachelor\'s degree, Computer Science',
    content: <p>Graduated at the top of my class, took active role in the Coding club, Hackathons, Finance club,
      and the Universities soccer team. Received Deans list award in every single year.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - Present',
    location: 'Via Transportation',
    title: 'Senior Backend Engineer',
    content: (
      <p>
        Dynamic and innovative software developer with a proven track record of delivering high-quality solutions
        in fast-paced environments. Proficient in full-stack development, with expertise in front-end and back-end
        technologies. Adept at leading teams and driving project success through collaboration and strategic
        problem-solving. Passionate about embracing emerging technologies and continuously enhancing skills to stay
        at the forefront of the industry.
      </p>
    ),
  },
  {
    date: 'August 2020 - May 2022',
    location: 'Vayyer 4D imaging',
    title: 'Embedded Software Developer',
    content: (
      <p>
        Resourceful and forward-thinking embedded developer with a demonstrated history of designing and implementing
        innovative solutions for embedded systems. Proficient in low-level programming languages and hardware
        interfacing, with a focus on optimizing performance and efficiency. Skilled in leading cross-functional teams
        and driving projects from concept to completion in the embedded domain. Committed to staying updated with the
        latest technologies and methodologies to deliver cutting-edge solutions.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Cristiano Ronaldo',
      text: 'Gai is an amazing developer, highly recommended!.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Wayne Rooney',
      text: 'I have been working with Gai Ashkenazy for a while now, He is super friendly and super motivated. ' +
        'Where ever he is, I would bet he is a top performer.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Bruno Fernandes',
      text: 'Gai Ashkenazy is the best!! as my friend Cristiano said, highly recommended!!!.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is where you can reach out and say hello.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@gaiashkenazy.me',
      href: 'mailto:reachout@gaiashkenazy.me',
    },
    {
      type: ContactType.Location,
      text: 'Tel Aviv, Israel',
      href: 'https://maps.app.goo.gl/cop1uUUrQUgDsR7m8',
    },
    {
      type: ContactType.Instagram,
      text: '@guyashk',
      href: 'https://www.instagram.com/guyashk/',
    },
    {
      type: ContactType.Github,
      text: 'GaiAshk',
      href: 'https://github.com/GaiAshk',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/GaiAshk'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/14611692/gai-ashkenazy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gaiashkenazy/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/guyashk/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/GaiAshkenazy'},
];
