import scrapBlack from '../../../assets/btn_Sheet_black.png';
import scrap from '../../../assets/btn_Sheet.png';
import { useState } from 'react';
import styles from './HomeButton.module.css';

function ScrapButton() {
  const [scrapicon, setScrapIcon] = useState(scrap);

  function handleScrapIcon() {
    scrapicon === scrap ? setScrapIcon(scrapBlack) : setScrapIcon(scrap);
  }

  return (
    <button onClick={handleScrapIcon} className={styles.button}>
      <img src={scrapicon} alt="스크랩 화면 아이콘" />
    </button>
  );
}

export default ScrapButton;
