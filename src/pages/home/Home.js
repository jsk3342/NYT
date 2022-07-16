import styles from './Home.module.css';
import Main from './Main/Main';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal.js';

const key = 'bIiSLhG9fcmiMJTS0qNuG7btu0CxRE8r';
let searchString = 'usa';
const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchString}&api-key=${key}`;

const Home = () => {
  const [article, setArticle] = useState([]);
  const initialState = useSelector((state) => {
    return state;
  });
  console.log(initialState);

  useEffect(() => {
    async function GetArticle() {
      try {
        const res = await axios.get(URL);
        const articleResult = res.data.response.docs;
        setArticle(articleResult);
      } catch (error) {
        console(error);
      }
    }
    GetArticle();
  }, []);

  return (
    <main className={styles.main}>
      <Main article={article} />
      {/* <Modal /> */}
      {
        //버튼 클릭하면 모달창 나와 주세요 작성 버튼 상태 관리
      }
    </main>
  );
};

export default Home;

