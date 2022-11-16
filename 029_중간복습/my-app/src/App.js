import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import  reset  from 'styled-reset';
import shoppingCart from './assets/icon-shopping-cart-white.svg'

// npx create-react-app my-app --template basic-react
//cd my-app
// npm install styled-components styled-reset


const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀 reset코드 + 유틸리티코드 */
  /* 한줄 말줄임, 두줄 말줄임... */
  ${reset}
  span{
    color : red;
    font-size : 12px;
  }
  a{
    text-decoration:none;
    color: inherit;
  }
  button{
    border : none;
    cursor : pointer; 
  }
  *{
    box-sizing: border-box;
  }
`

async function requests(){
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data


}

function ProductList(){
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch){
    requests().then(productData => {
      setProductListData(productData)
      setDataLoadSwitch(false)
    })
  }

  // 무한반복
  // requests().then(productData => setProductListData(productData)) 
  // console.log(productListData)

  // const productListData = requests() // 그냥 const productListData = requests() 로 받아오면 promise 를 받아오는 것 뿐, .then() 해서 데이터 불러온걸 받아줘야해
  // console.log(productListData)

  return(
    <ul>
      {productListData.map(item=>console.log(item))}
    </ul>
  )
}

function ShoppingCart(){
  return <a href="#">쇼핑카트</a>
}

function App() {
  return (
    <main>
      <ProductList />
      <ShoppingCart />
    </main>
  );
}
export default App;
