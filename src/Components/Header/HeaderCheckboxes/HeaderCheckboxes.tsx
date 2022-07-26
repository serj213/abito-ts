import React from 'react';

import s from './HeaderCheckboxes.module.scss';

const HeaderCheckboxes: React.FC = () => {
  return (
    <div className={s.headerCheckboxes}>
      <div className={`${s.headerCheckboxes__checkbox} ${s.checkbox}`}>
        <input id="only-name" type="checkbox" />
        <label htmlFor="only-name">только в названиях</label>
      </div>
      <div className={`${s.headerCheckboxes__checkbox} ${s.checkbox}`}>
        <input id="only-photo" type="checkbox" />
        <label htmlFor="only-photo">только с фото</label>
      </div>
    </div>
  );
};

export default HeaderCheckboxes;
