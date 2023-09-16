import './app.scss';
import '../assets/fonts/styles/roboto.scss';

import React from 'react';

import Header from './Header_/Header';
import Menu from './Menu/Menu';
import MainPage from './pages/MainPage/MainPage';

export default function App() {
  return (
    <>
      <Menu />
      <main>
        <MainPage header={<Header />} />
      </main>
    </>
  );
}
