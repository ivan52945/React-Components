//import '../styles/index.css';

import React, { FC } from 'react';

import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';

const App: FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
