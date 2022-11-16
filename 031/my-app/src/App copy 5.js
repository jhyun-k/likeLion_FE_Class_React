import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom"

function Index(){
  return <h2>main페이지</h2>
}

function ProductDetails(props){
  const location = useLocation();
  console.log(location)
  const path = location.pathname.split('/')[2]

  return <h2>productDetail {path}페이지</h2>

}

function Cart(){
  return <h2>cart페이지</h2>

}

function Buy(){
  return <h2>buy페이지</h2>

}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}