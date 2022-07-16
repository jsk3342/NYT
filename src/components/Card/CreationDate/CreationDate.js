import styles from './CreationDate.module.css';

const CreationDate = (props) => {
  return (
    <p className={styles.creationDate}>
      {props.pub_date.substring(0,10)}
    </p>
  );
};

export default CreationDate;
