import { BrowserRouter, Routes, Route, Link, useLocation,useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Main </Link>
      <Link to="/product"> Product </Link>
      <Link to="/cart"> Cart </Link>
      <Link to="/buy"> Buy </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/product" element={<ProductHome />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/buy" element={<Buy />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Main(){
  return <h1>hello world0</h1>
}


function Cart(){
  return <h1>Cart</h1>
}

function Buy(){
  return <h1>Buy</h1>
}

function ProductHome(){
  return <h1>ProductHome</h1>
}

function Product(){
  const { id } = useParams();
  console.log(id);
// const imgUrl = `www.hojun.com/product/${id}`
return (
  <>
    <h1>hello Product {id}</h1>
  </>
)
}

export default App;