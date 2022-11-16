import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` // 이부분 추가
  ${reset}
`;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
  {/* reset.css를 root에 적용해서 모든 파일에 적용 */}
    <GlobalStyle /> 
    <App tab="home" />
  </>
);