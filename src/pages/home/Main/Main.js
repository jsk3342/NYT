import Card from '../../../components/Card/Card';
//import styles from './Main.module.css';

const Main = (props) => {
  return (
    <ul>
      {props.article.map((article, index) => {
        return <Card article={article} index={index} key={index} />; //기사 리덕스로 관리하기 나중에 처리
      })}
    </ul>
  );
};

export default Main;
