import { render, screen } from '@testing-library/react'
import CityDetail from '../features/cities/dashboard/CityDetails';
import { CityContext } from '../app/services/cityContext';

test("CityDetail component renders successfully", () => {

    render(
        <CityContext.Provider value={{
            selectedCity: {
                country: 'UK',
                geonameid: 1002,
                subcountry: 'North Ireland',
                name: 'London'
            },
            currentPage: 1,
            doPaging: () => {},
            selectCity: () => {},
            cancelSelectCity: () => {},
            paginatedCities: []
        }}>
            <CityDetail/>
        </CityContext.Provider>
    );

    const element = screen.getByText(/Close/i);

    expect(element).toBeInTheDocument();
})


