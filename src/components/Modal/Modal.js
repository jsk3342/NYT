import Date from '../Date/Date';
import HeadLine from '../HeadLine/HeadLine';
import Nation from '../Nation/Nation';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { nonModal } from '../../store/modal';

function Modal() {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(nonModal());
    //버튼 누를 때 인풋 키워드 통신 후 보내기
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
