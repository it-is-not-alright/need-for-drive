import React from 'react';
import useCars from '../hooks/useCars';
import './app.scss';
import '../fonts/styles/roboto.scss';

export default function App() {
  const cars: string[] = useCars();

  function renderList() {
    return cars.map((car) => <li key={car}>{car}</li>);
  }

  return (
    <div className='container'>
      <p>Redux test:</p>
      <ul>{renderList()}</ul>
    </div>
  );
}
