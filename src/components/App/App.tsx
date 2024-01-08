import './style.scss';
import '~/assets/fonts/styles/roboto.scss';

import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '~/components/App/Header/Header';

import Spinner from '../common/Spinner/Spinner';
import MainPage from '../pages/MainPage/MainPage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Menu from './Menu/Menu';
import Slider from './Slider/Slider';
import { AppRoute } from './types';

const OrderingPage = lazy(() => import('../pages/OrderingPage/OrderingPage'));
const OrderPage = lazy(() => import('../pages/OrderPage/OrderPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  const location = useLocation();

  return (
    <>
      <Menu isLimited={location.pathname === AppRoute.Main} />
      <main>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path={AppRoute.Main} element={<MainPage />} />
              <Route path={AppRoute.Ordering} element={<OrderingPage />} />
              <Route path={AppRoute.Order} element={<OrderPage />} />
              <Route path={AppRoute.Any} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Slider isDisplay={location.pathname === AppRoute.Main} />
    </>
  );
}

export default App;
