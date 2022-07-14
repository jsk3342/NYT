import serch from '../../../assets/serch.png';
import styles from './SelectHeadLine.module.css';

const SelectHeadLine = () => {
  return (
    <button className={styles.button} type="button">
      <img className={styles.serchIcon} src={serch} alt="serch" />
      전체 헤드라인
    </button>
  );
};

export default SelectHeadLine;
