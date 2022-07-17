import styles from './Home.module.css';
import Main from './Main/Main';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/Modal/Modal.js';
import changeKeyword from '../../store/store.js';

const Home = () => {
  let serchKeyword = '';
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${serchKeyword}&api-key=bIiSLhG9fcmiMJTS0qNuG7btu0CxRE8r`;
  const [article, setArticle] = useState([]);
  const dispatch = useDispatch();
  let articleInfoSerchKeyword = useSelector(
    (state) => state.articleInfo.serchKeyword
  );

  //기사 가져오기
  useEffect(() => {
    async function GetArticle() {
      try {
        const res = await axios.get(URL);
        const articleResult = res.data.response.docs;
        setArticle(articleResult);
      } catch (error) {
        console.log(error);
      }
    }
    GetArticle();
  }, []);

  return (
    <main className={styles.main}>
      <Main article={article} />
      <Modal />
    </main>
  );
};

export default Home;
