import React from 'react';

import s from './headerFilters.module.scss';

const HeaderFilters: React.FC = () => {
  const selectCategories = [
    {
      name: 'Любая категория',
      value: 'Любая категория',
    },
    {
      name: 'Машины',
      value: 'Машины',
    },
    {
      name: 'Недвижимость',
      value: 'Недвижимость',
    },
    {
      name: 'Работа',
      value: 'Работа',
    },
    {
      name: 'Вакансии',
      value: 'Вакансии',
    },
    {
      name: 'Мотоциклы',
      value: 'Мотоциклы',
    },
  ];

  return (
    <div className={s.headerFilter__filters}>
      <div className={s.headerFilter__select}>
        <select name="" id="category">
          {selectCategories.map(({ name, value }, index) => {
            return (
              <option key={index} value={value}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      {/* headerFilter */}
      <div className={s.headerFilter__searchInput}>
        <input type="text" placeholder="Поиск по объявлениям" />
      </div>
      <div className={s.headerFilter__region}>
        <button data-popup="change-region" className="open-popup">
          По всей России
        </button>
      </div>
      <div className={s.headerFilter__radius}>
        <button data-popup="radius-search" className="open-popup">
          Радиус поиска
        </button>
      </div>
      <button className={s.headerFilter__btnSearch}>Найти</button>
    </div>
  );
};

export default HeaderFilters;
