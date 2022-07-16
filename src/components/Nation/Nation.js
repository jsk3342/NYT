import NationButtons from './NationButtons/NationButtons';
import styles from './Nation.module.css';

function Nation() {
  return (
    <section>
      <h3 className={styles.title}>국가</h3>
      <NationButtons />
    </section>
  );
}

export default Nation;
