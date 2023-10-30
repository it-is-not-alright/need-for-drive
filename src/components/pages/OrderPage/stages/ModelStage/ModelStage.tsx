import './style.scss';

import React, { useState } from 'react';

import RadioGroup from '~/components/RadioGroup/RadioGroup';
import { ICar, ICategory } from '~/store/types';

import CarBox from './CarBox/CarBox';
import { cars, categories } from './constants';
import { ModelStageProps } from './types';

function ModelStage({ updateReachedStageIndex }: ModelStageProps) {
  const [category, setCategory] = useState<ICategory>(categories[1]);
  const [selectedCar, setSelectedCar] = useState<ICar>(cars[0]);

  const onCategoryChange = (newCategory: ICategory) => {
    setCategory(newCategory);
    updateReachedStageIndex();
  };

  return (
    <div id="model-stage">
      <RadioGroup
        items={categories}
        onChange={onCategoryChange}
        selectedItem={category}
      />
      <div id="car-grid">
        {cars.map((car) => {
          return (
            <CarBox
              key={car.id}
              car={car}
              isActive={car.id === selectedCar.id}
              onClick={() => setSelectedCar(car)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ModelStage;
