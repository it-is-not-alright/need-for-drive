import './style.scss';

import React, { Fragment } from 'react';

import Icon from '../Icon/Icon';
import BreadcrumbsProps from './types';

function Breadcrumbs({ items, activeIndex }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => {
        let color;
        if (index < activeIndex) {
          color = 'dark';
        } else if (index === activeIndex) {
          color = 'green';
        } else {
          color = 'gray';
        }
        return (
          <Fragment key={item}>
            <p className={`${color}-text fw-700`} key={`${item}-p`}>
              {item}
            </p>
            {index !== items.length - 1 ? (
              <Icon
                name="breadcrumbs-arrow"
                width={6}
                height={8}
                key={`${item}-arrow`}
              />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
