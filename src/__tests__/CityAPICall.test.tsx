import { screen, render } from "@testing-library/react";
import { City } from "../app/models/city";
import { ServiceContext } from "../app/services/serviceContext";
import { CityMockData } from "../app/utils/CityMockData";

import CityService from "../app/services/cityService";
import CityDashboard from "../features/cities/dashboard/CityDashboard";


test("Should_Fetch_City_List_From_Backend_API", async () => {
    const cityService = new CityService();

    const mockFetchData = jest.spyOn(cityService, 'list')
        .mockImplementation(async (sortBy: string | undefined): Promise<City[]> => {
            return new Promise((resolve) => {
                resolve([CityMockData])
            });
        })

    render(
        <ServiceContext.Provider value={{ ICityService: new CityService() }}>
            <CityDashboard />
        </ServiceContext.Provider>
    );

    await (() => expect(mockFetchData).toHaveBeenCalled());
    
    await (() => expect(screen.getByText(/Spain/i)).toBeInTheDocument());
});