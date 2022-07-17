import styles from './Header.module.css';
import SelectHeadLine from './SelectHeadLine/SelectHeadLine';
import SelectDate from './SelectDate/SelectDate';
import SelectCountry from './SelectCountry/SelectCountry';
import { useDispatch } from 'react-redux';
import { showModal } from '../../store/modal';

const Header = () => {
  const dispatch = useDispatch();
  const popModal = () => {
    dispatch(showModal());
  };
  return (
    <header className={styles.header}>
      <SelectHeadLine popModal={popModal} />
      <SelectDate popModal={popModal} />
      <SelectCountry popModal={popModal} />
    </header>
  );
};

export default Header;
