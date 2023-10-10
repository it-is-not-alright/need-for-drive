import React, { useState } from 'react';

import RadioGroup from '~/components/RadioGroup/RadioGroup';
import { ICategory } from '~/store/category/types';

import categories from './constants';
import { ModelStageProps } from './types';

function ModelStage({ updateAvailableStageIndex }: ModelStageProps) {
  const [category, setCategory] = useState<ICategory>(categories[1]);

  const onCategoryChange = (newCategory: ICategory) => {
    setCategory(newCategory);
    updateAvailableStageIndex();
  };

  return (
    <RadioGroup
      items={categories}
      onChange={onCategoryChange}
      selectedItem={category}
    />
  );
}

export default ModelStage;
