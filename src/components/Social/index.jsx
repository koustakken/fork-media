import React from 'react';
//icons
import { BsGithub, BsTelegram, BsTwitter, BsInstagram, BsSearch } from 'react-icons/bs';
//scss
import style from './Social.module.scss';

export default function Social() {
  const icons = [
    <BsGithub size="20" />,
    <BsTelegram size="20" />,
    <BsTwitter size="20" />,
    <BsInstagram size="20" />,
  ];
  return (
    <ul className={style.root}>
      {icons.map((value, index) => (
        <li className={style.icons} key={index}>
          <a href="#">{value}</a>
        </li>
      ))}
      <div className={style.search}>
        <BsSearch size="20" />
      </div>
    </ul>
  );
}
