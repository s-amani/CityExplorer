import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';

import { ServiceContext } from './app/services/serviceContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';

import ReactDOM from 'react-dom/client';
import CityService from './app/services/cityService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ServiceContext.Provider value={{ICityService: new CityService()}}>
    <RouterProvider router={router} />
  </ServiceContext.Provider>
);