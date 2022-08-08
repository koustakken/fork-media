import React from 'react';
//scss
import style from './Nav.module.scss';

export default function Nav() {
  const data = ['Статьи', 'Лучшее', 'Новости', 'Клуб', 'Тесты'];

  return (
    <ul className={style.root}>
      {data.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
}
