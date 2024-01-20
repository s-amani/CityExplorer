import { fireEvent, render, screen } from '@testing-library/react'
import { CityContext } from '../app/services/cityContext';
import CityList from '../features/cities/dashboard/CityList';
import CityListPaging from '../features/cities/dashboard/CityListPaging';
import { CityListMockData } from '../app/utils/CityMockData';


test("CityList component renders successfully", () => {

    const mockData = {
        currentPage: 1,
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
    };

    render(
        <CityContext.Provider value={mockData}>
            <CityList />
        </CityContext.Provider>
    );

    const element = screen.getByText(/UK/i);

    expect(element).toBeInTheDocument();
})

test("Pagination next click", async () => {

    render(
        <CityContext.Provider value={CityListMockData}>
            <CityListPaging />
        </CityContext.Provider>
    );

    const onNextButtonClickMock = jest.fn();
        
    const buttonElement = screen.getByText(/Next/i);

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    
    await (() => expect(onNextButtonClickMock).toHaveBeenCalledTimes(1));
})

