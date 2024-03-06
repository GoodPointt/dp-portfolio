import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const socialItems = [
  { link: 'https://t.me/GoodPointt', img: '/telegram.png' },
  {
    link: 'https://www.linkedin.com/in/dmytro-petyshyn/',
    img: '/linkedin.png',
  },
  { link: 'https://github.com/GoodPointt', img: '/github.png' },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          @goodpointt
        </motion.span>
        <motion.ul
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {socialItems.map(({ link, img }, idx) => (
            <li key={idx}>
              <a href={link} target="_blank" rel="noreferrer noopener">
                <img
                  src={img}
                  alt=""
                  target="_blank"
                  rel="noreferrer noopener"
                />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
