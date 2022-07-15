import Card from '../../../components/Card/Card';
import styles from './Main.module.css';

const Main = () => {

  return (
    <main className={styles.main}>
      <ul>
        <Card />
        <Card />
      </ul>
    </main>
  );
};

export default Main;
