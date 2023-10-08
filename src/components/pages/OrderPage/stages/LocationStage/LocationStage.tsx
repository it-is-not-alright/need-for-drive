import './style.scss';

import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MapImage from '~/assets/images/map/img-0.png';
import InputSelect from '~/components/InputSelect/InputSelect';
import { InputSelectItem } from '~/components/InputSelect/types';
import { getCities, getPoints } from '~/store/api';
import { setCity } from '~/store/city/citySlice';
import citySelector from '~/store/city/selectors';
import { setColor } from '~/store/color/colorSlice';
import { setModel } from '~/store/model/modelSlice';
import { setPoint } from '~/store/point/pointSlice';
import pointSelector from '~/store/point/selectors';
import { RootState } from '~/store/root';
import { City, Point } from '~/store/types';

import { LocationStageProps } from './types';

function LocationStage({ updateAvailableStageIndex }: LocationStageProps) {
  const mapState = (state: RootState) => ({
    city: citySelector(state),
    point: pointSelector(state),
  });
  const { city, point } = useSelector(mapState);
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const cities = getCities();
  const points = getPoints();
  const [cityPoints, setCityPoints] = useState<Point[]>([]);

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
  }, [city]);

  function clear(): void {
    dispatch(setModel(''));
    dispatch(setColor(''));
    updateAvailableStageIndex();
  }

  const cityOnSelect = (newValue: InputSelectItem<City> | null): void => {
    dispatch(setCity(newValue ? newValue.value : null));
    dispatch(setPoint(null));
    clear();
  };

  const pointOnSelect = (newValue: InputSelectItem<Point> | null): void => {
    dispatch(setPoint(newValue ? newValue.value : null));
    clear();
  };

  return (
    <div id="location-stage">
      <div id="location-stage__input-container">
        <p className="dark-text fw-300 ta-right">Город</p>
        <InputSelect
          maxLength={150}
          placeholder="Начните вводить город ..."
          items={cities.map((item) => {
            return { value: item, label: item.name };
          })}
          selectedItem={city ? { value: city, label: city.name } : null}
          onSelect={cityOnSelect}
        />
        <p className="dark-text fw-300 ta-right">Пункт выдачи</p>
        <InputSelect
          maxLength={150}
          placeholder="Начните вводить пункт ..."
          items={cityPoints.map((item) => {
            return { value: item, label: item.name };
          })}
          selectedItem={point ? { value: point, label: point.name } : null}
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
