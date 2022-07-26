import React from 'react';
import s from './headerCategory.module.scss';

import logo from '../../../assets/images/header/logo.png';

const HeaderCategory: React.FC = () => {
  const categories = [
    {
      id: 0,
      name: 'Авто',
    },
    {
      id: 1,
      name: 'Недвижимость',
    },
    {
      id: 2,
      name: 'Работа',
    },
    {
      id: 3,
      name: 'Услуги',
    },
    {
      id: 4,
      name: 'Ещё',
    },
  ];

  return (
    <div className={s.headerCategory__category}>
      <a href="#" className={s.headerCategory__logo}>
        <img src={logo} alt="" />
      </a>
      {categories.map(({ name, id }) => {
        return (
          <a key={id} href="#" className={s.headerCategory__linkCategory}>
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default HeaderCategory;
