import styles from './Date.module.css';

function Date() {
  return (
    <section>
      <label className={styles.title}>날짜</label>
      <input className={styles.dateInput} placeholder="날짜를 선택해주세요" />
    </section>
  );
}

export default Date;
