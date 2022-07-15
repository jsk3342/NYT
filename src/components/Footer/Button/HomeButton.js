import homeBlack from '../../../assets/btn_Home_Select_black.png';
import home from '../../../assets/btn_Home_Select.png';
import { useState } from 'react';
import styles from './HomeButton.module.css';

function HomeButton() {
  const [homeicon, setHomeIcon] = useState(home);

  function handleHomeIcon() {
    homeicon === home ? setHomeIcon(homeBlack) : setHomeIcon(home);
  }

  return (
    <button onClick={handleHomeIcon} className={styles.button}>
      <img src={homeicon} />
    </button>
  );
}

export default HomeButton;
