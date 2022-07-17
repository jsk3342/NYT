import homeBlack from '../../../assets/btn_Home_Select_black.png';
import home from '../../../assets/btn_Home_Select.png';
import styles from './HomeButton.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function HomeButton() {
  const [homeicon, setHomeIcon] = useState(home);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/NYT' || location.pathname === '/NYT/') {
      setHomeIcon(home);
    } else {
      setHomeIcon(homeBlack);
    }
  });

  return (
    <img className={styles.homeIcon} src={homeicon} alt="홈 화면 아이콘" />
  );
}

export default HomeButton;
