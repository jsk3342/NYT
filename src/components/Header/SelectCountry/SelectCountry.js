import styles from './SelectCountry.module.css';

const SelectCountry = ({ popModal }) => {
  return (
    <button className={styles.button} onClick={popModal} type="button">
      전체 국가
    </button>
  );
};

export default SelectCountry;
