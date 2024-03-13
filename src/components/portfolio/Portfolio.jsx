import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Next.js Mutag-Haetz',
    img: '/projects/mutag.jpg',
    desc: 'Bilingual (LTR and RTL) interface supporting both English and Hebrew. Auth, cart, favorites, sorting, filtering, ordering and search.',
    demo: 'https://www.mutaghaetz.com',
  },
  {
    id: 2,
    title: 'Next.js Poly-Max',
    img: '/projects/poly-max.jpg',
    desc: 'Bilingual catalog of metal products in Germany with wide range of items, sorted and filtered by categories, search, information about company and contact form.',
    demo: 'https://poly-metal-max.vercel.app',
  },
  {
    id: 3,
    title: 'React.js Aj-Serwis',
    img: '/projects/ajserwise.jpg',
    desc: 'Service for job search in Poland. Multilingual support. Feedback form for job applications and communication with employers.',
    demo: 'https://aj-serwis.vercel.app/',
  },
  {
    id: 4,
    title: 'React+Node Tasks Planner',
    img: '/projects/goosetrack.jpg',
    desc: 'Full-stack application designed to enhance time management. My tasks included developing the backend part, implementing token authentication, Google authorization, and drag-and-drop functionality for task management.',
    demo: 'https://salone22.github.io/project-starship/',
  },
  {
    id: 5,
    title: 'React.js Ukranian Eco Rescue Foundation',
    img: '/projects/uerf.jpg',
    desc: `Landing page, where you'll find a registration form for the forum, updates on foundation's activities, and photo reports from past events.`,
    demo: 'https://main--enchanting-elf-dad285.netlify.app/',
  },
  {
    id: 6,
    title: 'Vanilla JS Cinemania',
    img: '/projects/cinemania.jpg',
    desc: 'Platform dedicated to helping users discover and explore new films.',
    demo: 'https://nikkms.github.io/team-project-cinemania',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_blank" rel="noreferrer noopener">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
