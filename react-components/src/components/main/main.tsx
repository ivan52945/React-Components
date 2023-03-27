import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import common from './main.module.css';

import About from '../../pages/about/about';
import Animals from '../../pages/animals/animals';
import NotFound from '../../pages/error/not-found';
import People from '../../pages/people/people';
class Main extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <main className={common.main}>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/" element={<Animals />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <></>
        </Routes>
      </main>
    );
  }
}

export default Main;
