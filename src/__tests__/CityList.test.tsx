import { fireEvent, render, screen } from '@testing-library/react'
import { CityContext } from '../app/services/cityContext';
import CityList from '../features/cities/CityList';
import CityListPaging from '../features/cities/CityListPaging';
import { CityListMockData } from '../app/utils/CityMockData';


test("Should_Render_CityList_Component_Successfully", () => {

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

test("Should_Fire_Handle_Paging_Method_On_Next_Button_Click", async () => {

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

