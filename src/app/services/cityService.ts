import { request } from "../api/agent";
import { City } from "../models/city";
import { ArrayHelper } from "../utils/arrayHelpers";

export interface ICityService {
  list: (sortBy: string) => Promise<City[]>;
}

export default class CityService implements ICityService {

    async list(sortBy: string = 'name') : Promise<City[]> {
      
        var result = await request.get<City[]>('/');

        // implement sorting
        var sortedCities = ArrayHelper.sort(result, sortBy);

        return sortedCities;
    }
  }