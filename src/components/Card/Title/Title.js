import styles from './Title.module.css';

const Title = (props) => {
  return (
    <h2 className={styles.title}>
      <a href={props.web_url}>
        {!props.title.print_headline === null
          ? props.title.print_headline
          : props.title.main}
      </a>
    </h2>
  );
};

export default Title;
