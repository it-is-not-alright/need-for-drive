import './style.scss';
import '~/assets/fonts/styles/roboto.scss';

import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from '~/components/Header/Header';
import Menu from '~/components/Menu/Menu';
import MainPage from '~/components/pages/MainPage/MainPage';
import NotFoundPage from '~/components/pages/NotFoundPage/NotFoundPage';
import OrderPage from '~/components/pages/OrderPage/OrderPage';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <HashRouter>
      <Menu />
      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MainPage header={<Header />} />} />
            <Route path="/order" element={<OrderPage header={<Header />} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </HashRouter>
  );
}

export default App;
