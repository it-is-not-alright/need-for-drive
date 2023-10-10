import './style.scss';

import classNames from 'classnames';
import React, { Fragment } from 'react';

import Icon from '../Icon/Icon';
import BreadcrumbsProps from './types';

function Breadcrumbs({
  items,
  activeIndex,
  availableIndex,
  onIndexChange,
}: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => {
        return (
          <Fragment key={item}>
            <button
              type="button"
              onClick={() => onIndexChange(index)}
              className={classNames({ active: index === activeIndex })}
              disabled={index > availableIndex}
            >
              {item}
            </button>
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
