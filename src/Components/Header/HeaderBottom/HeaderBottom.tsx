import React from 'react';
import s from './headerBottom.module.scss';

import Container from '../../common/Container';
import HeaderCategory from '../HeaderCategory/HeaderCategory';
import HeaderFilters from '../HeaderFilters/HeaderFilters';
import HeaderCheckboxes from '../HeaderCheckboxes/HeaderCheckboxes';

const CategoryHeader: React.FC = () => {
  return (
    <>
      <div className={s.headerFilter}>
        <Container>
          <div className={s.headerFilter__inner}>
            <HeaderCategory />
            <HeaderFilters />
            <HeaderCheckboxes />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CategoryHeader;
