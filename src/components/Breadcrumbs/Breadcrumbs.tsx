import './style.scss';

import classNames from 'classnames';
import React, { Fragment } from 'react';

import Icon from '~/components/Icon/Icon';

import BreadcrumbsProps from './types';

function Breadcrumbs({ items, activeIndex }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => {
        const classes = classNames('fw-700', {
          'dark-text': index < activeIndex,
          'green-text': index === activeIndex,
          'gray-text': index > activeIndex,
        });
        return (
          <Fragment key={item}>
            <p className={classes}>{item}</p>
            {index !== items.length - 1 && (
              <Icon name="breadcrumbs-arrow" width={6} height={8} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
