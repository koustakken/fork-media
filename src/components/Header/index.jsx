import React from 'react';
import { Link } from 'react-router-dom';
//scss
import style from './Header.module.scss';
//components
import Nav from '../Nav';
import Social from '../Social';

export default function header() {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <Link to="/">
          <h1>ВИЛКА</h1>
        </Link>
        <Nav />
        <Social />
      </div>
    </div>
  );
}
