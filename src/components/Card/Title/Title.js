import styles from './Title.module.css';

const Title = (props) => {
  return (
    <h2 className={styles.title}>
      {!props.title.print_headline === null
        ? props.title.print_headline
        : props.title.main}
    </h2>
  );
};

export default Title;
