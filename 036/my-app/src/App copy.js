import { useState, useEffect } from 'react';

function getName(){
  console.log('오래 기다리는 작업')
  return '개리'
}

function App() {

  const [name, setName] = useState(getName())
  const [num, setNum] = useState(0)

  return (
    <div>
      <div>안녕하세요 {name} 현재 숫자는 {num} 입니다.</div>
      <button onClick={()=>setNum((p)=>p+1)}>버튼</button>
    </div>
  );
}
export default App;




