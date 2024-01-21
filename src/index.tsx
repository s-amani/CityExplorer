import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { ServiceContext } from './app/services/serviceContext';
import CityService from './app/services/cityService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ServiceContext.Provider value={{ICityService: new CityService()}}>
    <App />
  </ServiceContext.Provider>
);


reportWebVitals();
