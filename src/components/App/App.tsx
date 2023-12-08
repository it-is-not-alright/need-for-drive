import './style.scss';
import '~/assets/fonts/styles/roboto.scss';

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '~/components/App/Header/Header';
import MainPage from '~/components/pages/MainPage/MainPage';
import NotFoundPage from '~/components/pages/NotFoundPage/NotFoundPage';
import OrderingPage from '~/components/pages/OrderingPage/OrderingPage';

import OrderPage from '../pages/OrderPage/OrderPage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Menu from './Menu/Menu';
import Slider from './Slider/Slider';
import { AppRoute } from './types';

function App() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <main>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Ordering} element={<OrderingPage />} />
            <Route path={AppRoute.Order} element={<OrderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      {location.pathname === AppRoute.Main && <Slider />}
    </>
  );
}

export default App;
