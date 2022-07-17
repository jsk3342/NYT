import Date from '../Date/Date';
import HeadLine from '../HeadLine/HeadLine';
import Nation from '../Nation/Nation';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { nonModal } from '../../store/modal';

function Modal() {
  const dispatch = useDispatch();
  const closeModal = () => {
    // state ? setState(false) : setState(true);
    // console.log(state);
    dispatch(nonModal());
  };
  return (
    <section className={styles.modal}>
      <div className={styles.innerWrap}>
        <HeadLine />
        <Date />
        <Nation />
        <button onClick={closeModal} className={styles.button} type="button">
          필터 적용하기
        </button>
      </div>
    </section>
  );
}

export default Modal;
