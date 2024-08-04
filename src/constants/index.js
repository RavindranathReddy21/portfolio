import {
  paytm,
  frontend,
  backend,
  ux,
  dsa,
  genai,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongodb,
  mysql,
  express,
  fakenews
} from '../assets';
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Structures and Algorithms',
    icon: dsa,
  },
  {
    title: 'Generative AI',
    icon: genai,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'express',
    icon: express,
  },
  {
    name: 'git',
    icon: git,
  }
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'fakenewsdetection',
    name: 'Fake News Detection',
    description: 'Leveraging Generative AI, Machine Learning, and Deep Learning models, this project determines the authenticity of news articles.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: fakenews,
    repo: 'https://github.com/RavindranathReddy21/fakeNewsDetection',
    demo: 'https://github.com/RavindranathReddy21/fakeNewsDetection',
  },
  
  {
    id: 'paytm',
    name: 'Paytm Wallet Clone',
    description:
      'A paytm wallet clone with a robust backend using the MERN stack. Leveraged MongoDB, Express.js,React.js, and Node.js to create a scalable architecture.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: paytm,
    repo: 'https://github.com/RavindranathReddy21/paytm-wallet-clone',
    demo: 'https://github.com/RavindranathReddy21/paytm-wallet-clone',
  }
];

export { services, technologies, experiences, projects };
