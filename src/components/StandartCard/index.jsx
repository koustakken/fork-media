import React from 'react';
//scss
import style from '../StandartCard/StandartCard.module.scss';

export default function standartCard({ category, imgUrl, title, suptitle, author, date }) {
  return (
    <div className={style.root}>
      <div className={style.category}>
        <p>{category}</p>
      </div>
      <img src={imgUrl} alt="image" />
      <div className={style.description}>
        <div className={style.text}>
          <h3>{title}</h3>
          <h4>{suptitle}</h4>
        </div>
        <div className={style.info}>
          <h6>{author}</h6>
          <h6>{date}</h6>
        </div>
      </div>
    </div>
  );
}
