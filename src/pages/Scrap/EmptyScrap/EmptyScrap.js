import fileIcon from '../../../assets/file-text.png';
import styles from './EmptyScrap.module.css';

function EmptyScrap() {
  return (
    <section className={styles.emptyScrap}>
      <img className={styles.fileIcon} src={fileIcon} alt="서류 아이콘" />
      <p>저장된 스크랩이 없습니다.</p>
      <button className={styles.button}>스크랩 하러 가기</button>
    </section>
  );
}

export default EmptyScrap;
