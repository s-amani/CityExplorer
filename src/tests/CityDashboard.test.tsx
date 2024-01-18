import { render, screen } from '@testing-library/react'
import CityDashboard from '../features/cities/dashboard/CityDashboard';
import { CityContext } from '../app/services/cityContext';


test("CityDetail component renders successfully", () => {

    render(
        <CityContext.Provider value={{
            pageNumber: 1,
            selectedCity: undefined,
            doPaging: () => { },
            selectCity: () => { },
            cancelSelectCity: () => { },
            paginatedCities: [
            {
                country: 'UK',
                geonameid: 1002,
                subcountry: 'North Ireland',
                name: 'London'
            },
            {
                country: 'Germany',
                geonameid: 1003,
                subcountry: 'N/A',
                name: 'Berlin'
            }]
        }}>
            <CityDashboard />
        </CityContext.Provider>
    );

    const element = screen.getByText(/UK/i);

    expect(element).toBeInTheDocument();
})
