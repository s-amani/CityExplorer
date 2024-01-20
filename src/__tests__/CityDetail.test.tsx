import { render, screen } from '@testing-library/react'
import CityDetail from '../features/cities/dashboard/CityDetails';
import { CityContext } from '../app/services/cityContext';
import { CityListMockData } from '../app/utils/CityMockData';

test("CityDetail component renders successfully", () => {

    render(
        <CityContext.Provider value={CityListMockData}>
            <CityDetail/>
        </CityContext.Provider>
    );

    const element = screen.getByText(/Close/i);

    expect(element).toBeInTheDocument();
})


