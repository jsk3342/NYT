import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Title.module.css';

const key = 'bIiSLhG9fcmiMJTS0qNuG7btu0CxRE8r';
let searchString = 'iphone';
const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchString}&api-key=${key}`;

// .data.response.docs[0].abstract

// const showTitle = (title) => {
//   console.log(title);
//   return title;
// };

const Title = () => {
  const [result, setResult] = useState('');
  console.log(result);
  useEffect(() => {
    async function GetTitle() {
      try {
        const res = await axios.get(URL);
        const serchResult = res.data.response.docs[0].abstract;
        console.log(serchResult);
        setResult(serchResult);
      } catch (error) {
        console(error);
      }
    }
    GetTitle();
  }, []);
  return <h2 className={styles.title}>{result}</h2>;
};

export default Title;
