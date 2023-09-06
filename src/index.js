import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <StrictMode>
    <App />
  </StrictMode>,
);
