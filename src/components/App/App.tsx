import './style.scss';
import '../../assets/fonts/styles/roboto.scss';

import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import MainPage from '../pages/MainPage/MainPage';
import OrderPage from '../pages/OrderPage/OrderPage';

function App() {
  return (
    <>
      <Menu />
      <main>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage header={<Header />} />} />
            <Route path="/order" element={<OrderPage header={<Header />} />} />
          </Routes>
        </HashRouter>
      </main>
    </>
  );
}

export default App;
