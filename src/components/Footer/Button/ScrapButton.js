import scrapBlack from '../../../assets/btn_Sheet_black.png';
import scrap from '../../../assets/btn_Sheet.png';
import { useEffect, useState } from 'react';
import styles from './HomeButton.module.css';
import { useLocation } from 'react-router-dom';

function ScrapButton() {
  const [scrapicon, setScrapIcon] = useState(scrap);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/scrap') {
      setScrapIcon(scrap);
    } else {
      setScrapIcon(scrapBlack);
    }
  });
  return <img className={styles.homeIcon} src={scrapicon} alt="스크랩 화면 아이콘" />;
}

export default ScrapButton;
