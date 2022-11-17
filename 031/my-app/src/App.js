import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

/*
// 최종 목표
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study/6
https://www.studyin.co.kr/study/6/chat
https://www.studyin.co.kr/study/6/memo
https://www.studyin.co.kr/notice
https://www.studyin.co.kr/notice/recruit
https://www.studyin.co.kr/notice/business

// step 1
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study
https://www.studyin.co.kr/notice

// step 2
https://www.studyin.co.kr/study/6 를 들어갔을 때에
<p>6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청하셔야 합니다.</p>

// step 2
https://www.studyin.co.kr/study/6/chat
https://www.studyin.co.kr/study/6/memo 를 들어갔을 때에 각각

<p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 채팅방입니다.</p>
<p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 메모방입니다.</p>
*/


function Index(){
  return <div>Homepage</div>
}

function Coupon(){
  return <div>coupon</div>
}
function Question(){
  return <div>question</div>
}

function Cart(){
  return <div>cart</div>
}

function UsersDetail(){
  return <div>users</div>
}

function ProductDetail(){
  const { id } = useParams()
  return <p>{id} 번 제품</p>
}
function ProductDetailNotice(){
  const { id } = useParams()

  return <p>{id}번 productDetailNotice</p>
}


function Notice(){
  return <div>notice</div>
} 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/products/:id/*" element={<Outlet />}>
          <Route path='notice' element={<ProductDetailNotice/>}/>
        </Route>
        <Route path="/users/" element={<UsersDetail />}/>
        <Route path="/users/*" element={<Outlet />}>
          <Route path="notice" element={<Notice />}/>
          <Route path="question" element={<Question />}/>
          <Route path="coupon" element={<Coupon />}/>
        </Route>
        <Route path="/notice" element={<Notice />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;