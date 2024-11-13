import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Header from './components/Header';
import Content from './components/Content.js';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>
      <Header/>
      <Content />
      <Footer/>
  </React.StrictMode>
);

