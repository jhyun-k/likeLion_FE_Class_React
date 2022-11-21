import  React   from 'react';

/* 
context 안 쓰고 props 로 내리는 경우 이렇게 일일이 거쳐가는 모든 컴포넌트에 props 적어줘야함 개귀찮
*/

function Three({value}){
  return <div>가격 : {value}원</div>
}

function Two({value}){
  return(
  <div>
    <Three value={value} />
  </div>
  )
}

function One({value}){
  return (
    <div>
      <Two value={value} />
    </div>
  )
}

export default function App() {
  const value = 1000 // 이 값을 three에서 출력하고 싶습니다.
  return (
    <div>
      <One value={value} />
    </div>
  )
}