import styles from './Home.module.css';
import styled from 'styled-components';
import Main from './Main/Main';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/Modal/Modal.js';
import { addArticle } from '../../store/getArticle';

const Home = () => {
  const [article, setArticle] = useState([]);
  const state = useSelector((state) => state);
  const modalState = state.modalSlice.modal;
  const dispatch = useDispatch();

  const serchKeyword = state.headlineSlice.keyword;
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${serchKeyword}&page=0&api-key=bIiSLhG9fcmiMJTS0qNuG7btu0CxRE8r`;

  //기사 가져오기
  useEffect(() => {
    async function GetArticle() {
      try {
        const res = await axios.get(URL);
        const articleResult = res.data.response.docs;
        setArticle(articleResult);
        dispatch(addArticle(articleResult));
      } catch (error) {
        console.log(error);
      }
    }
    GetArticle();
  }, [serchKeyword]);

  return (
    <main className={styles.main}>
      <Main article={article} />
      {modalState && <Modal />}
    </main>
  );
};

export default Home;
