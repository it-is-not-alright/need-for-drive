import React from 'react';

import DateTimePicker from '~/components/DateTimePicker/DateTimePicker';

function AdditionallyStage() {
  return (
    <>
      <p>Дата аренды</p>
      <DateTimePicker placeholder="Введите дату и время" />
    </>
  );
}

export default AdditionallyStage;
