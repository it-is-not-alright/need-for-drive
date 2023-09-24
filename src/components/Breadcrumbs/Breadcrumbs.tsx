import './style.scss';

import React, { Fragment, ReactElement } from 'react';

import Icon from '../Icon/Icon';
import BreadcrumbsProps from './types';

function Breadcrumbs({ items, activeIndex }: BreadcrumbsProps) {
  function renderItem(item: string, index: number): ReactElement {
    if (index < activeIndex) {
      return <button type="button">{item}</button>;
    }
    if (index === activeIndex) {
      return <p className="green-text fw-700">{item}</p>;
    }
    return <p className="gray-text fw-700">{item}</p>;
  }

  return (
    <div className="breadcrumbs">
      {items.map((item, index) => {
        return (
          <Fragment key={item}>
            {renderItem(item, index)}
            {index !== items.length - 1 ? (
              <Icon name="breadcrumbs-arrow" width={6} height={8} />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;