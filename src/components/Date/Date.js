import styles from './Date.module.css';
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

function Date() {
  // let date = '';
  // console.log(date);
  // const [startDate, setStartDate] = useState(date);
  // const [endDate, setEndDate] = useState(date);
  // const CustomInput = ({ value, onClick }) => (
  //   <button className="example-custom-input" onClick={onClick}>
  //     {value}
  //   </button>
  // );
  return (
    <section>
      <label className={styles.title}>날짜</label>
      <input className={styles.dateInput} placeholder="날짜를 선택해주세요" />
      {/* <ReactDatePicker
        selected={startDate}
        selectsStart
        maxDate={date}
        customInput={<CustomInput />}
      />
      <ReactDatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        minDate={startDate}
        maxDate={date}
        customInput={<CustomInput />}
      /> */}
    </section>
  );
}

export default Date;
