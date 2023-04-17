import React from 'react';
import Nav from '../../components/nav/nav';

import header from './header.module.css';

function Header() {
  return (
    <header className={header.header}>
      <h1 className={header.nav}>My Animals</h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
