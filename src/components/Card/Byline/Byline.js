import styles from './Byline.module.css';

const Byline = (props) => {
  return (
    <p className={styles.byline}>
      {props.byline}
    </p>
  );
};

export default Byline;
