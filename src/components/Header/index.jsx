import React from 'react';
//scss
import style from './Header.module.scss';
//components
import Nav from '../Nav';
import Social from '../Social';

export default function header() {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <h1>ВИЛКА</h1>
        <Nav />
        <Social />
      </div>
    </div>
  );
}
