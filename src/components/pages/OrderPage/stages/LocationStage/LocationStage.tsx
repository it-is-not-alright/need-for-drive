import './style.scss';

import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import MapImage from '~/assets/images/map/img-0.png';
import InputSelect from '~/components/InputSelect/InputSelect';
import useThrowError from '~/hooks/useThrowError';
import { getCities, getPoints } from '~/store/api';
import { setCity } from '~/store/city/citySlice';
import citySelector from '~/store/city/selectors';
import { ICity } from '~/store/city/types';
import { setColor } from '~/store/color/colorSlice';
import { setModel } from '~/store/model/modelSlice';
import { setPoint } from '~/store/point/pointSlice';
import pointSelector from '~/store/point/selectors';
import { IPoint } from '~/store/point/types';

import { LocationStageProps } from './types';

function LocationStage({ updateAvailableStageIndex }: LocationStageProps) {
  const mapSelector = createSelector(
    [citySelector, pointSelector],
    (city, point) => {
      return { city, point };
    },
  );
  const { city, point } = useSelector(mapSelector);
  const [cities, setCities] = useState<ICity[]>([]);
  const [points, setPoints] = useState<IPoint[]>([]);
  const [cityPoints, setCityPoints] = useState<IPoint[]>([]);
  const throwError = useThrowError();
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    getCities()
      .then((requestResult) => setCities(requestResult))
      .catch((error) => throwError(error));
    getPoints()
      .then((requestResult) => setPoints(requestResult))
      .catch((error) => throwError(error));
  }, []);

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
