import React from 'react';
import { Link } from 'react-router-dom';
//scss
import style from './Nav.module.scss';

export default function Nav() {
  const data = [
    { name: 'Статьи', link: 'articles' },
    { name: 'Лучшее', link: 'best' },
    { name: 'Новости', link: 'news' },
    { name: 'Клуб', link: 'club' },
    { name: 'Тесты', link: 'tests' },
  ];

  return (
    <ul className={style.root}>
      {data.map((value, index) => (
        <Link to={value.link}>
          <li key={index}>{value.name}</li>
        </Link>
      ))}
    </ul>
  );
}
