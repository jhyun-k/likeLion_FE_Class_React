import Product from './components/Product';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  useEffect(()=>{

    /* 
    - axios.get(url, conf)
    - axios.delete(url, conf)
    - axios.post(url, data, conf)
    - axios.put(url, data, conf)
    - axios.patch(url, data, conf)
    */
    axios.get('http://test.api.weniv.co.kr/mall')
    .then(res=>{
      console.log('axios')
      console.log(res)
      console.log(res.data)
    })
    fetch('http://test.api.weniv.co.kr/mall')
            .then(res => {
                console.log('fetch')
                console.log(res)
                // console.log(res.json()) // pending됩니다.
                return res.json()
            })
            .then(data => {
                console.log(data)
            })

  })
  return (
    <div className="App">
      <div><Product/></div>
    </div>
  );
}
export default App;
