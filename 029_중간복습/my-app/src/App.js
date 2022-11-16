import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import  reset  from 'styled-reset';
import shoppingCart from './assets/icon-shopping-cart-white.svg'
// import heartOn from './assets/icon-heart-on.svg'
// import heartOff from './assets/icon-heart.svg'

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

const ContainerMain = styled.main`
  display:flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`

const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position : fixed;
  bottom : 20px;
  right : 20px
`
// const heartOnOff = styled.span`
//   background: url(${heartOff}) no-repeat center / 40px 40px;
//   width : 16px;
//   height : 16px;
//   color : red;
// `

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
    <ContainerProductList>
      {productListData.map(item=> 
      <ProductListItem 
      key={item.id} 
      productName={item.productName} 
      price={item.price} 
      thumbnailImg={item.thumbnailImg} />)}
    </ContainerProductList>
    
  )
}



function ProductListItem({productName, price, thumbnailImg}){
  return (
    <ItemProductList>
      <ImgProduct 
        src={"http://test.api.weniv.co.kr/" + thumbnailImg} 
        alt={productName} 
      />
      <p>{productName}</p>
      <p>{price}</p>
    </ItemProductList>
  )
}
/*     return (
        <ul>
            {productListData.map((item) => (
                <ProductListItem key={item.id} {...item} /> // 이런식으로 {...item}구조분해할당으로 넘겨준다
            ))}
        </ul>
    );
}

function ProductListItem({ productName, price, thumbnailImg }) {// { 받아온 객체이름들 적어주면 아주 간편~ 심지어 만약 price가 필요없으면 안넣어도 됩니다}
    return (
        <li>
            <img
                src={'http://test.api.weniv.co.kr/' + thumbnailImg}
                alt={productName}
            />
            <p>{productName}</p>
            <span>하트</span>
            <p>{price}</p>
        </li>
    );
} */


function ShoppingCart(){
  return <IconShoppingCart href="#"></IconShoppingCart>
}

function App() {
  return (
    <main>
      <ContainerMain>
        <GlobalStyle/>
        <ProductList />
        <ShoppingCart />
      </ContainerMain>
    </main>
  );
}
export default App;
