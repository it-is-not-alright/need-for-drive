import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RadioGroup from '~/components/RadioGroup/RadioGroup';
import Spinner from '~/components/Spinner/Spinner';
import categoriesSelector from '~/store/categories/selectors';
import { getCategories } from '~/store/categories/thunk';
import { defaultCategory } from '~/store/constants';
import { filterModel } from '~/store/models/selectors';
import { getModels } from '~/store/models/thunk';
import orderDetailsSelector from '~/store/orderDetails/selectors';
import { setCategory, setModel } from '~/store/orderDetails/slice';
import { AppDispatch } from '~/store/root';
import { ICategory, IModel } from '~/store/types';

import ModelBox from './ModelBox/ModelBox';

function ModelStage() {
  const { category, car } = useSelector(orderDetailsSelector);
  const {
    data: models,
    errorMessage: modelsError,
    isLoading,
  } = useSelector(filterModel);
  const { data: categories, errorMessage: categoriesError } =
    useSelector(categoriesSelector);
  const [categoryModels, setCategoryModels] = useState<IModel[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getModels());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (modelsError === null && categoriesError === null) {
      return;
    }
    const errorMessage: string = 'Ошибка сервера';
    throw new Error(errorMessage);
  }, [modelsError, categoriesError]);

  function updateCategoryModels(newCategory: ICategory) {
    if (newCategory.id === defaultCategory.id) {
      setCategoryModels(models);
      return;
    }
    setCategoryModels(
      models.filter((item) => {
        return item.categoryId.id === newCategory.id;
      }),
    );
  }

  useEffect(() => {
    updateCategoryModels(category);
  }, [models]);

  const handleCategoryChange = (newCategory: ICategory) => {
    dispatch(setCategory(newCategory));
    updateCategoryModels(newCategory);
  };

  const handleModelChange = (newCar: IModel): void => {
    dispatch(setModel(newCar));
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
        <div id="model-grid">
          {categoryModels.map((categoryModel) => {
            return (
              <ModelBox
                key={categoryModel.id}
                model={categoryModel}
                isActive={car !== null && categoryModel.id === car.id}
                onClick={() => handleModelChange(categoryModel)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ModelStage;
