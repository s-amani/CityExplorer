import { createContext } from 'react';
import { City } from '../models/city';

interface CityContextData {
    paginatedCities: City[];
    selectedCity: City | undefined,
    pageNumber: number | undefined,

    doPaging: (type: string) => void;
    selectCity: (id: number) => void,
    cancelSelectCity: () => void;
}

export const CityContext = createContext<CityContextData>({
    paginatedCities: [],
    selectedCity: undefined,
    pageNumber: 1,

    doPaging: (type: string) => {},
    selectCity: () => {},
    cancelSelectCity: () => {}
});