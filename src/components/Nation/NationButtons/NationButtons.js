import styles from './NationButtons.module.css';

const nations = [
  '대한민국',
  '중국',
  '일본',
  '미국',
  '북한',
  '러시아',
  '프랑스',
  '영국',
  '북한',
];

function NationButtons() {
  return (
    <div className={styles.warp}>
      {nations.map((nations, index) => {
        return (
          <button className={styles.button} key={index} type="button">
            {nations}
          </button>
        );
      })}
    </div>
  );
}

export default NationButtons;
