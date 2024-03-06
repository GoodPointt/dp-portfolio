import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    title: 'Webapp Development',
    desc: 'Creating modern and responsive user interfaces using frameworks and libraries. Working with layouts and transforming them into functional web pages',
  },
  {
    title: 'API',
    desc: 'Developing and integrating APIs to enhance software functionality and facilitate seamless communication between different systems and platforms.',
  },
  {
    title: 'SEO',
    desc: 'Applying basic Search Engine Optimization methods to improve search engine rankings.',
  },
  {
    title: 'Self-Improvement',
    desc: 'Continuously learning new technologies and development methods to enhance skills.',
  },
];

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I&apos;m here to assist your brand in growing
          <br /> and advancing
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Exciting</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.ul className="listContainer" variants={variants}>
        {benefits.map(({ title, desc }, idx) => (
          <motion.li
            key={idx}
            className="box"
            whileHover={{ background: 'black', color: 'lightgray' }}
          >
            <h2>{title}</h2>
            <p>{desc}</p>
            {/* <button>Go</button> */}
          </motion.li>
        ))}
        {/* <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Website Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.ul>
    </motion.div>
  );
};

export default Services;
