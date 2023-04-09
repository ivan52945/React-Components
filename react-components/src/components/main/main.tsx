import React from 'react';
import { Routes, Route } from 'react-router-dom';
import common from './main.module.css';

import About from '../../pages/about/about';
import Animals from '../../pages/characters/characters';
import NotFound from '../../pages/error/not-found';
import Peoples from '../../pages/people/peoples';

function Main() {
  return (
    <main className={common.main}>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/people" element={<Peoples />}></Route>
        <Route path="/" element={<Animals />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <></>
      </Routes>
    </main>
  );
}

export default Main;
