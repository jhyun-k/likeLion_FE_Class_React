import React from 'react'
import { useState,useRef } from 'react'

// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.


export default function App() {
  const nameVal = useRef(null)
  const genderVal = useRef(null)
  const ageVal = useRef(null)

  
  const [result, setResult] = useState('')
  const handleInfo = (e)=>{
    const name = nameVal.current.value
    const gender = genderVal.current.value
    const age = ageVal.current.value

    setResult(`이름은 ${name} 입니다 성별은 ${gender}이고, 나이는 ${age}살 입니다.`)
  }

  return (
    <div>
      <label htmlFor="">이름 : <input type="text" ref={nameVal}/>
      </label>
      <label htmlFor="">성별 : <input type="" ref={genderVal}/>
      </label>

      <label htmlFor="">나이 : <input type="text" ref={ageVal}/>
      </label>
      <button onClick={handleInfo}>자기소개시작</button>
      <h3>{result}</h3>
      {/* 여기 이름은 ㅇㅇㅇ 성별은 ㅇㅇ 나이는 ㅇㅇ살 나오면 되는거 */}
    </div>
  )
}
