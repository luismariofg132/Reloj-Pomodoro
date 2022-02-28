import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SettingsContextProvider from './components/Settings';
import './style.css'

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
);

