import styles from './Header.module.css';
import SelectHeadLine from './SelectHeadLine/SelectHeadLine';
import SelectDate from './SelectDate/SelectDate';
import SelectCountry from './SelectCountry/SelectCountry';

const Header = () => {
  return (
    <header className={styles.header}>
      <SelectHeadLine />
      <SelectDate />
      <SelectCountry />
    </header>
  );
};

export default Header;
