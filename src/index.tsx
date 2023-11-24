import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.tsx';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(<App />);
