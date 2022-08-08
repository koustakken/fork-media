import React from 'react';
//scss
import style from './Header.module.scss';

export default function header() {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <h1>ВИЛКА</h1>
        <Nav />
      </div>
    </div>
  );
}
