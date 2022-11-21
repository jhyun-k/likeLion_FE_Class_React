import { createContext } from 'react'

const Value = createContext({price:1000})
/* createContext 로 props 안내리고도 값 내릴 수 있다
Consumer 로 값 가져올 수 있고
Provider 로 값 바꿀 수 있어

props drilling 하지 않고 직접 Three 컴포넌트에 값을 내려줄 수 있음 파일이 달라도 import해서 사용 가능
*/

function Three(){
  return (
    <Value.Consumer> 
      {(value) => (<p>{value.price}</p>)}
    </Value.Consumer>
  )
}

function Two(){
  return (
    <div>
      Two
      <Value.Provider value={{price:2000}}>
        <Three/>
      </Value.Provider>
    </div>
  )
}

function One(){
  return (
    <div>
      One
      <Two/>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <One/>
    </div>
  )
}