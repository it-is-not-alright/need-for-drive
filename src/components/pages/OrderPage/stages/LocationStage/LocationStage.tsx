import './style.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MapImage from '~/assets/images/map/img-0.png';
import InputSelect from '~/components/InputSelect/InputSelect';
import citiesSelector from '~/store/cities/selectors';
import { getCities } from '~/store/cities/thunk';
import orderDetailsSelector from '~/store/orderDetails/selectors';
import {
  setCity,
  setColor,
  setModel,
  setPoint,
  setReachedStage,
} from '~/store/orderDetails/slice';
import pointsSelector from '~/store/points/selectors';
import { getPoints } from '~/store/points/thunk';
import { AppDispatch } from '~/store/root';
import { ICity, IPoint } from '~/store/types';

function LocationStage() {
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

  function updateCityPoints(newCity: ICity | null) {
    if (newCity === null) {
      setCityPoints([]);
      return;
    }
    setCityPoints(
      points.filter((item) => {
        return item.cityId.id === newCity.id;
      }),
    );
  }

  function clear(): void {
    dispatch(setReachedStage(0));
    dispatch(setModel(null));
    dispatch(setColor(''));
  }

  const handleCitySelect = (newCity: ICity | null): void => {
    dispatch(setCity(newCity));
    dispatch(setPoint(null));
    updateCityPoints(newCity);
    clear();
  };

  const handlePointSelect = (newPoint: IPoint | null): void => {
    dispatch(setPoint(newPoint));
    updateCityPoints(city);
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
          onSelect={handleCitySelect}
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          maxLength={150}
          placeholder="Начните вводить пункт ..."
          items={cityPoints}
          selectedItem={point}
          onSelect={handlePointSelect}
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
