//  icons
import {
  FiYoutube,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

import Save_Img from './assets/img/services/Save_Img.png';
import Budget_Img from './assets/img/services/Budget_Img.png';
import Guide_Img from './assets/img/services/Guide_Img.png';
import Earn_Img from './assets/img/services/Earn_Img.png';

// companies icons

import Yahoo from './assets/img/brands/Yahoo.png';
import USA_today from './assets/img/brands/USA_today.png';
import Refinery29 from './assets/img/brands/Refinery29.png';
import Glamour from './assets/img/brands/Glamour.png';
import BBC from './assets/img/brands/BBC.png';
import Berkeley from './assets/img/brands/Berkeley.png';
import Cision from './assets/img/brands/Cision.png';
import Fox from './assets/img/brands/Fox.png';

// projects images
import cypto_tracker from './assets/img/projects/cypto_tracker.png';
import daily_spending_tracker from './assets/img/projects/daily_spending_tracker.png';
import debt_pay_off from './assets/img/projects/debt_pay_off.png';
import housing_cost_calc from './assets/img/projects/housing_cost_calc.png';
import mini_budget_sheet from './assets/img/projects/mini_budget_sheet.png';
import num_Budget_Sheet from './assets/img/projects/503020_Budget_Sheet.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage4 from './assets/img/testimonials/testimonial-4.png';
import testimonial_2 from './assets/img/testimonials/testimonial_2.jpg';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.tiktok.com/@amoochlife',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/amoochlife/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/company/amoochlife/',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/amoochlife',
  },
];

// companies
export const brands = [
  {
    img: Yahoo,
    href: 'https://us.yahoo.com/',
  },
  {
    img: USA_today,
    href: 'https://www.usatoday.com/',
  },
  {
    img: Glamour,
    href: 'https://www.glamourmagazine.co.uk/?international',
  },
  {
    img: BBC,
    href: 'https://www.bbc.co.uk/news',
  },
  {
    img: Fox,
    href: 'https://www.foxnews.com/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: mini_budget_sheet,
    name: 'Mini Budget Sheet',
    category: 'Budget',
    content: 'Visualize your monthly spending and saving habits.',
  },
  {
    id: '2',
    image: housing_cost_calc,
    name: 'Housing Cost Calculator',
    category: 'Personal Finance',
    content: 'Use our calculator to figure out how much house you can afford based on your salary.',
  },
  {
    id: '3',
    image: daily_spending_tracker,
    name: 'Daily Spending Tracker',
    category: 'Budget',
    content: 'Track your spending and learn how to manage your money.',
  },
  {
    id: '4',
    image: cypto_tracker,
    name: 'Crypto Tracker',
    category: 'Crypto',
    content: 'Track your gains and losses on your crypto portfolio easily in 2 minutes.',
  },
  {
    id: '5',
    image: debt_pay_off,
    name: 'Debt Pay Off Guide',
    category: 'Personal Finance',
    content: 'Find out how to pay off loans faster with this template.',
  },
  {
    id: '6',
    image: num_Budget_Sheet,
    name: '50/30/20 Budget Sheet',
    category: 'Budget',
    content: 'Track your spending and manage it better with this template.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Budget',
  },
  {
    name: 'Personal Finance',
  },
  {
    name: 'Crypto',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <img src={Save_Img} alt='Save_Img' style={{ width: '100%' }}/>,
    name: 'Save',
    description:
      'Take Control of your Budgeting and Saving.',
  },
  {
    icon: <img src={Earn_Img} alt='Earn_Img' style={{ width: '100%' }}/>,
    name: 'Earn',
    description:
      'Earn Rewards everytime you save money.',
  },
  {
    icon: <img src={Budget_Img} alt='Earn_Img' style={{ width: '100%' }}/>,
    name: 'Budget',
    description:
      'We help you budget your monthly expense with our system.',
  },
  {
    icon: <img src={Guide_Img} alt='Guide_Img' style={{ width: '100%' }}/>,
    name: 'Guide',
    description:
      'Free Financial Resources and Guides.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage4,
    authorText:
      'I’m pretty bad at managing my spending habits and savings. I love the auto budget idea!',
    authorName: 'Eric N.',
    authorPosition: 'New York, NY',
  },
  {
    authorImg: testimonial_2,
    authorText:
      'It helps me stay disciplined without a lot of effort.  And I get paid to budget at the same time.',
    authorName: 'Amanda P.',
    authorPosition: 'Austin, TX',
  },
  {
    authorImg: TestiImage1,
    authorText:
      'This app is awesome!! I haven\'t budgeted for years and Mooch is actually making it fun.',
    authorName: 'Sharon T.',
    authorPosition: 'San Diego, CA',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'We are here to help you.',
    description: 'Email me at hello@amoochlife.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'San Francisco, USA',
    description: 'Serving clients worldwide',
  },
];
