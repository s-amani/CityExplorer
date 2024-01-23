import { render, screen } from '@testing-library/react'
import CityDetail from '../features/cities/CityDetails';
import { CityContext } from '../app/services/cityContext';
import { CityListMockData } from '../app/utils/CityMockData';

test("Should_Render_CityDetail_Component_Successfully", () => {

    render(
        <CityContext.Provider value={CityListMockData}>
            <CityDetail/>
        </CityContext.Provider>
    );

    const element = screen.getByText(/Close/i);

    expect(element).toBeInTheDocument();
})


