import { createContext } from 'react';
import { City } from '../models/city';

export interface CityContextData {
    paginatedCities: City[];
    selectedCity: City | undefined,
    currentPage: number | undefined,

    doPaging: (newPage: number) => void;
    selectCity: (id: number) => void,
    cancelSelectCity: () => void;
}

export const CityContext = createContext<CityContextData>({
    currentPage: 1,
    paginatedCities: [],
    selectedCity: undefined,

    doPaging: (newPage: number) => {},
    selectCity: () => {},
    cancelSelectCity: () => {}
});