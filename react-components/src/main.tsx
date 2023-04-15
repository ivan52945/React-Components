import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import store from './store/store';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
