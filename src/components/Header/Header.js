import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <BrowserRouter >
      <header className={classes.Header}>
        <div className={classes.Logo}>
          {/* Your logo image or text goes here */}
        </div>
        <nav>
          <ul className={classes.NavLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}

export default Header;
