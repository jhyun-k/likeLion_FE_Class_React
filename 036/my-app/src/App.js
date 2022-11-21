import { useState, useEffect, useLayoutEffect } from 'react'

/* 

1. useLayoutEffect는 useEffect보다 먼저 실행됩니다. 따라서 useEffect보다 먼저 실행하고 싶은 무언가가 있다면 useLayoutEffect를 사용해야 한다라는 것을 알 수 있습니다.
2. 
2.1 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행됩니다. 그리고 useLayoutEffect 가 실행됩니다.
2.2 useEffect return의 콜백함수가 실행됩니다. useEffect 가 실행됩니다.

3. 깜빡임을 해결하고 싶다? useEffect -> useLayoutEffect */


/* 
# useEffect

- 화면이 실행되고 나서 그려지므로 깜빡임이 발생함
- 깜빡이면 useEffect 대신 useLayoutEffect를 발생하면 된다.
- 브라우저 페인팅 스크린이 되기 전에 레이아웃이 실행되기 때문에 깜빡임이 발생하는 것이다
- 변수 감시용
- 페인팅 후에 작업을 해줘야 할 때 사용

# useLayoutEffect

- 깜빡임이 발생할 때 사용
- 페인팅 전에 작업을 해줘야 할 때 사용
*/

function App() {
  const [value, setValue] = useState(100);
  
  // useEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);

  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default App;