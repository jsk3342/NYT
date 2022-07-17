import Date from '../Date/Date';
import HeadLine from '../HeadLine/HeadLine';
import Nation from '../Nation/Nation';
import styles from './Modal.module.css';

const key = 'bIiSLhG9fcmiMJTS0qNuG7btu0CxRE8r';
let headLineKeyword = localStorage.getItem('headLineKeyword');
//console.log(headLineKeyword);
let searchString = headLineKeyword;
const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchString}&api-key=${key}`;

function Modal() {
  // useEffect(() => {
  //   async function GetArticle() {
  //     try {
  //       const res = await axios.get(URL);
  //       const articleResult = res.data.response.docs;
  //       setArticle(articleResult);
  //     } catch (error) {
  //       console(error);
  //     }
  //   }
  // }, []);

  return (
    <section className={styles.modal}>
      <div className={styles.innerWrap}>
        <HeadLine />
        <Date />
        <Nation />
        <button className={styles.button} type="button">
          필터 적용하기
        </button>
      </div>
    </section>
  );
}

export default Modal;
