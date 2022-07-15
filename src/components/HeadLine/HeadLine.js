import styles from './HeadLine.module.css';

function HeadLine() {
  return (
    <section>
      <label className={styles.title}>헤드라인</label>
      <input placeholder="검색하실 헤드라인을 입력해주세요." />
    </section>
  );
}

export default HeadLine;
