import HomeButton from './Button/HomeButton';
import ScrapButton from './Button/ScrapButton';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <HomeButton />
      <ScrapButton />
    </footer>
  );
};

export default Footer;

//여기도 리덕스로 홈 스크랩 버튼 상태 관리
