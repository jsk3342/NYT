import { useState } from 'react';
import serch from '../../../assets/serch.png';
import styles from './SelectHeadLine.module.css';

const SelectHeadLine = () => {
  const [isClickSelectHeadLine, setIsClickSelectHeadLine] = useState(false);
  const onClickSelectHeadLine = () => {
    isClickSelectHeadLine === false
      ? setIsClickSelectHeadLine(true)
      : setIsClickSelectHeadLine(false);
    console.log(isClickSelectHeadLine);
    localStorage.setItem('isClickSelectHeadLine', isClickSelectHeadLine);
  };
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClickSelectHeadLine}
    >
      <img className={styles.serchIcon} src={serch} alt="serch" />
      전체 헤드라인
    </button>
  );
};

export default SelectHeadLine;
