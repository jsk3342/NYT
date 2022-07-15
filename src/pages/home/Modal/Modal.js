import Date from '../../../components/Date/Date';
import HeadLine from '../../../components/HeadLine/HeadLine';
import Nation from '../../../Nation/Nation';
import styles from './Modal.module.css';

function Modal() {
  return (
    <section className={styles.modal}>
      <div className={styles.innerWrap}>
        <HeadLine />
        <Date />
        <Nation />
        <button className={styles.button} type="button">
          필터 적용하기
        </button>
      </div>
    </section>
  );
}

export default Modal;
