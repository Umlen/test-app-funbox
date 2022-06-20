import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';

window.onload = function() {
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}