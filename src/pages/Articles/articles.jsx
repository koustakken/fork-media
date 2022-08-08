import React from 'react';
//scss
import style from '../Articles/Articles.module.scss';
//components
import StandartCard from '../../components/StandartCard';

export default function Articles() {
  return (
    <div className={style.root}>
      <h1>Статьи</h1>
      <div className={style.content}>
        <StandartCard />
        <StandartCard />
        <StandartCard />
        <StandartCard />
        <StandartCard />
        <StandartCard />
      </div>
    </div>
  );
}
