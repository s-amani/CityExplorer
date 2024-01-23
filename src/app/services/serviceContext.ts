


import { createContext } from 'react';
import { ICityService } from './cityService';

interface IServiceProvider {
    ICityService?: ICityService;
}

export class ServiceProvider implements IServiceProvider {
    ICityService?: ICityService;
}

export const ServiceContext = createContext<IServiceProvider>({});
