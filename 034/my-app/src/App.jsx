import React, { useState, useMemo } from 'react';
import ShowState from './ShowState';

export default function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  function heavyCalc() {
    let s = 0;
    for (let i = 0; i < 1000000000; i++) {
      s += i;
    }
    return s;
  }
  // let calc = heavyCalc();
  const calc = useMemo(() => {
    return heavyCalc();
  }, []);

  const increaseNum = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseNum = () => {
    setNumber((prev) => prev - 1);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h4> ✨ 엄청난 연산값</h4>
      <p>{calc}</p>
      <h4> ✨ 숫자바꾸기</h4>
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
      <h4> ✨ 글자바꾸기</h4>
      <input type="text" onChange={handleText} />
      <ShowState number={number} text={text} />
    </>
  );
}
