import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function App() {
  const searchValue = useRef(null)
  const handleSearch = (e)=>{
    console.log('click 했어여')
    console.log(searchValue.current.value)

    

    searchValue.current.value = 'hello'
  }
  return (
    <div>
        <label htmlFor="">검색어를 입력하세요 :
        <input type="text" ref={searchValue}/>
        </label>
        <button onClick={handleSearch}>검색</button>
    </div>
  )
}
