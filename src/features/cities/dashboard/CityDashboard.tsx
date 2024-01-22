
import React, { Suspense, useContext, useEffect, useState } from "react";
import { Grid, Segment } from "semantic-ui-react";

import { City } from "../../../app/models/city";
import { CityContext, CityContextData } from "../../../app/services/cityContext";
import { ServiceContext } from "../../../app/services/serviceContext";

import { CityList } from "./CityList";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { CityListHeader } from "./CityListHeader";
import CityDetailPlaceholder from "./CityDetailPlaceholder";

const CityDetail = React.lazy(() => import('./CityDetails'));


export const CityDashboard = () => {

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [cities, setCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<City | undefined>(undefined);

    const { ICityService } = useContext(ServiceContext);

    useEffect(() => {

        // self invoked anonymous async method
        (async () => {

            // fetch data from the endpoint
            const cityList = await ICityService!.list("name");

            // update props
            setCities(cityList);

            setLoading(false);
        })();

    }, [ICityService]);

    // Region: methods and handlers
    const handleSelectActivity = (id: number) => {
        setSelectedCity(paginatedCities.find(x => x.geonameid === id));
    }

    const handleCancelSelectActivity = () => {
        setSelectedCity(undefined);
    }

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }
    // -------------------

    const paginatedCities = ICityService!.handlePagination(currentPage, cities);

    if (loading) return <LoadingComponent content='Loading Cities...' />


    const dataContext: CityContextData = {
        paginatedCities,
        selectedCity,
        currentPage,

        doPaging: handlePageChange,
        selectCity: handleSelectActivity,
        cancelSelectCity: handleCancelSelectActivity
    };

    return (
        <>
            <CityListHeader />
            <CityContext.Provider
                value={dataContext}>
                <Grid>
                    {/* City List view */}
                    <Grid.Column width='10'>
                        <Segment>
                            <CityList />
                        </Segment>
                    </Grid.Column>

                    {/* City Detail view */}
                    <Grid.Column width='6'>
                        {
                            selectedCity ? 
                            (<Suspense fallback={<LoadingComponent content="Loading..." />}>
                                <CityDetail />
                            </Suspense>) : 
                            <CityDetailPlaceholder />
                        }
                    </Grid.Column>
                </Grid>
            </CityContext.Provider>
        </>
    )
}

export default CityDashboard;