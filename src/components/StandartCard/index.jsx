import React from 'react';
//scss
import style from '../StandartCard/StandartCard.module.scss';

export default function standartCard() {
  return (
    <div className={style.root}>
      <div className={style.category}>
        <p>медицина</p>
      </div>
      <img
        src="https://knife.media/wp-content/uploads/2022/08/ZHivotnye-glav-640x480.jpg"
        alt="image"
      />
      <div className={style.description}>
        <div className={style.text}>
          <h3>Таблетка со скотобойни.</h3>
          <h4>
            Какие лекарста делаются с применением компонентов животного происхождения и почему это
            важно
          </h4>
        </div>
        <div className={style.info}>
          <h6>Илья Чикунов</h6>
          <h6>1 августа</h6>
        </div>
      </div>
    </div>
  );
}
