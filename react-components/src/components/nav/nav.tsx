import React from 'react';
import { NavLink } from 'react-router-dom';

import nav from '../nav/nav.module.css';

function Nav() {
  return (
    <nav className={nav.nav}>
      <NavLink to="/about" className={nav.link}>
        About
      </NavLink>
      <NavLink to="/people" className={nav.link}>
        People
      </NavLink>
      <NavLink to="/" className={nav.link}>
        Characters
      </NavLink>
    </nav>
  );
}
export default Nav;
