import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MapImage from '~/assets/images/map/img-0.png';
import InputSelect from '~/components/InputSelect/InputSelect';
import { getCities } from '~/store/cities/citiesSlice';
import citiesSelector from '~/store/cities/selectors';
import {
  setCity,
  setColor,
  setModel,
  setPoint,
} from '~/store/orderDetails/orderDetailsSlice';
import orderDetailsSelector from '~/store/orderDetails/selectors';
import { getPoints } from '~/store/points/pointsSlice';
import pointsSelector from '~/store/points/selectors';
import { AppDispatch } from '~/store/root';
import { ICity, IPoint } from '~/store/types';

import { LocationStageProps } from './types';

function LocationStage({ updateAvailableStageIndex }: LocationStageProps) {
  const { city, point } = useSelector(orderDetailsSelector);
  const { data: cities, errorMessage: citiesError } =
    useSelector(citiesSelector);
  const { data: points, errorMessage: pointsError } =
    useSelector(pointsSelector);
  const [cityPoints, setCityPoints] = useState<IPoint[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCities());
    dispatch(getPoints());
  }, []);

  useEffect(() => {
    if (citiesError === null && citiesError === null) {
      return;
    }
    const errorMessage: string = 'Ошибка сервера';
    throw new Error(errorMessage);
  }, [citiesError, pointsError]);

  useEffect(() => {
    if (city === null) {
      setCityPoints([]);
      return;
    }
    setCityPoints(
      points.filter((item) => {
        return item.cityId.id === city.id;
      }),
    );
  }, [city, points]);

  function clear(): void {
    dispatch(setModel(''));
    dispatch(setColor(''));
    updateAvailableStageIndex();
  }

  const cityOnSelect = (newValue: ICity | null): void => {
    dispatch(setCity(newValue));
    dispatch(setPoint(null));
    clear();
  };

  const pointOnSelect = (newValue: IPoint | null): void => {
    dispatch(setPoint(newValue));
    clear();
  };

  return (
    <div id="location-stage">
      <div id="location-stage__input-container">
        <p className="dark-text fw-300 ta-right">Город</p>
        <InputSelect
          maxLength={150}
          placeholder="Начните вводить город ..."
          items={cities}
          selectedItem={city}
          onSelect={cityOnSelect}
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          maxLength={150}
          placeholder="Начните вводить пункт ..."
          items={cityPoints}
          selectedItem={point}
          onSelect={pointOnSelect}
        />
      </div>
      <p className="dark-text fw-300">Выбрать на карте:</p>
      <div id="location-stage__map">
        <img src={MapImage} alt="map" />
      </div>
    </div>
  );
}

export default LocationStage;
