import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ApiError from '~/api/ApiError';
import RadioGroup from '~/components/common/RadioGroup/RadioGroup';
import Spinner from '~/components/common/Spinner/Spinner';
import { filterCars } from '~/store/cars/selectors';
import { getCars } from '~/store/cars/thunk';
import categoriesSelector from '~/store/categories/selectors';
import { getCategories } from '~/store/categories/thunk';
import { defaultCategory } from '~/store/constants';
import orderDetailsSelector from '~/store/ordering-details/selectors';
import { setCar, setCategory } from '~/store/ordering-details/slice';
import { AppDispatch } from '~/store/root';
import { ICar, ICategory } from '~/store/types';

import CarBox from './CarBox/CarBox';

function ModelStage() {
  const { category, car } = useSelector(orderDetailsSelector);
  const {
    data: cars,
    errorMessage: carsError,
    isLoading,
  } = useSelector(filterCars);
  const { data: categories, errorMessage: categoriesError } =
    useSelector(categoriesSelector);
  const [categoryCars, setCategoryCars] = useState<ICar[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCars());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    const errorMessage: string = carsError || categoriesError;
    if (errorMessage === null) {
      return;
    }
    throw new ApiError(errorMessage);
  }, [carsError, categoriesError]);

  function updateCategoryCars(newCategory: ICategory) {
    if (newCategory.id === defaultCategory.id) {
      setCategoryCars(cars);
      return;
    }
    setCategoryCars(
      cars.filter((item) => {
        return item.categoryId.id === newCategory.id;
      }),
    );
  }

  useEffect(() => {
    updateCategoryCars(category);
  }, [cars]);

  const handleCategoryChange = (newCategory: ICategory) => {
    dispatch(setCategory(newCategory));
    updateCategoryCars(newCategory);
  };

  const handleCarChange = (newCar: ICar): void => {
    dispatch(setCar(newCar));
  };

  return (
    <div id="model-stage">
      <RadioGroup
        name="category"
        items={categories}
        onChange={handleCategoryChange}
        selectedItem={category}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="car-grid">
          {categoryCars.map((categoryCar) => {
            return (
              <CarBox
                key={categoryCar.id}
                car={categoryCar}
                isActive={car !== null && categoryCar.id === car.id}
                onClick={() => handleCarChange(categoryCar)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ModelStage;
