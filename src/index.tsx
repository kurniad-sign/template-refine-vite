import React from 'react';
import { createRoot } from 'react-dom/client';

import Application from './app';

import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
