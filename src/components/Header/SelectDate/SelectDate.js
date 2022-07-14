import date from '../../../assets/date.png';
import styles from './SelectDate.module.css';

const SelectDate = () => {
  return (
    <button className={styles.button} type="button">
      <img className={styles.dateIcon} src={date} alt="serch" />
      전체 날짜
    </button>
  );
};

export default SelectDate;
