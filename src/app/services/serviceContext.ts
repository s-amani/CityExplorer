import { createContext } from 'react';
import CityService, { ICityService } from './cityService';

interface IServiceProvider {
    ICityService?: ICityService;
}

export class ServiceProvider implements IServiceProvider {
    ICityService?: ICityService | undefined;
}

export const ServiceContext = createContext<IServiceProvider>(new ServiceProvider);
