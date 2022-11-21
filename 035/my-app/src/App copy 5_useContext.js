import React ,{useContext, createContext} from 'react'

const userInfo = createContext({name:'jihyun',id:'yalong',email:'yalong@naver.com'})

/* 요즘에는 Consumer 나 Provider 안 쓰고 useContext라는 훅으로 함 */

function One(){
  const {name, id, email} = useContext(userInfo)
  return(
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{email}</p>
    </div>
  )
}
export default function App() {

  return (
    <div><One /></div>
  )
}
