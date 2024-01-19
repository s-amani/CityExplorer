import { request } from "../api/agent";
import { City } from "../models/city";
import { ArrayHelper } from "../utils/arrayHelpers";

export interface ICityService {
  list: (sortBy: string) => Promise<City[]>;

  handlePagination: (currentPage: number, cities: City[]) => City[];
}

export default class CityService implements ICityService {

  async list(sortBy: string = 'name'): Promise<City[]> {

    var result = await request.get<City[]>('');

    // implement sorting
    var sortedCities = ArrayHelper.sort(result, sortBy);

    return sortedCities;
  }

  handlePagination = (currentPage: number, cities: City[]): City[] => {

    const [startIndex, endIndex] = this.getPaginationRange(currentPage);
    const paginatedCities = cities.slice(startIndex, endIndex);

    return paginatedCities;
  }

  getPaginationRange = (currentPage: number): [startIndex: number, endIndex: number] => {
    
    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return [startIndex, endIndex];
  }
}