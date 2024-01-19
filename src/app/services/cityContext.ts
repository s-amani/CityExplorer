import { createContext } from 'react';
import { City } from '../models/city';

interface CityContextData {
    paginatedCities: City[];
    selectedCity: City | undefined,
    currentPage: number | undefined,

    doPaging: (newPage: number) => void;
    selectCity: (id: number) => void,
    cancelSelectCity: () => void;
}

export const CityContext = createContext<CityContextData>({
    paginatedCities: [],
    selectedCity: undefined,
    currentPage: 1,

    doPaging: (newPage: number) => {},
    selectCity: () => {},
    cancelSelectCity: () => {}
});