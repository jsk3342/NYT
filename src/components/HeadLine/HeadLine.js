import { useDispatch } from 'react-redux';
import { changeKeyword } from '../../store/headline';
import styles from './HeadLine.module.css';

function HeadLine() {
  //여기에 기사 제목 필터 구현
  const dispatch = useDispatch();
  const handleheadLineInputChange = (e) => {
    //키워드가 입력된 1초 뒤에 저장하고 싶음, 성능 개선 필요
    let inputValue = e.target.value.replace(/(\W)/g, '+');
    console.log(inputValue);
    dispatch(changeKeyword(inputValue));
  };

  return (
    <section>
      <label className={styles.title}>헤드라인</label>
      <input
        placeholder="검색하실 헤드라인을 입력해주세요."
        onChange={handleheadLineInputChange}
      />
    </section>
  );
}

export default HeadLine;
