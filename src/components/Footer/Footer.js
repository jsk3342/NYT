import HomeButton from './Button/HomeButton';
import ScrapButton from './Button/ScrapButton';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={'/NYT'}>{<HomeButton />}</Link>
      <Link to={'/scrap'}>{<ScrapButton />}</Link>
    </footer>
  );
};

export default Footer;