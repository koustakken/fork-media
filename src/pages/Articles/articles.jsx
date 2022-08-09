import React from 'react';
//scss
import style from '../Articles/Articles.module.scss';
//components
import StandartCard from '../../components/StandartCard';
//data
import cardData from '../../assets/cardData';

export default function Articles() {
  return (
    <div className={style.root}>
      <h1>Статьи</h1>
      <div className={style.content}>
        {cardData.map((obj) => (
          <StandartCard {...obj} />
        ))}
      </div>
    </div>
  );
}
