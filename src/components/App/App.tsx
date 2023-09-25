import './style.scss';
import '../../assets/fonts/styles/roboto.scss';

import React from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import MainPage from '../pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Menu />
      <main>
        <MainPage header={<Header />} />
      </main>
    </>
  );
}

export default App;
