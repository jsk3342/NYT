import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import styles from './Main.module.css';

const key = 'bIiSLhG9fcmiMJTS0qNuG7btu0CxRE8r';
let searchString = 'iphone';
const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchString}&api-key=${key}`;

const Main = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function GetArticle() {
      try {
        const res = await axios.get(URL);
        const articleResult = res.data.response.docs;
        console.log(articleResult);
        setArticle(articleResult);
      } catch (error) {
        console(error);
      }
    }
    GetArticle();
  }, []);
  return (
    <main className={styles.main}>
      <ul>
        {article.map((article, index) => {
          return <Card article={article} index={index} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
