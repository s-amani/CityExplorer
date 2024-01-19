import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { City } from '../models/city';
import NavBar from './NavBar';
import CityDashboard from '../../features/cities/dashboard/CityDashboard';
import LoadingComponent from './LoadingComponent';
import { CityContext } from '../services/cityContext';
import { ServiceContext } from '../services/serviceContext';
import CityListHeader from '../../features/cities/dashboard/CityListHeader';

function App() {

  const [cities, setCities] = useState<City[]>([]);
  // const [paginatedCities, setPaginatedCities] = useState<City[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCity, setSelectedCity] = useState<City | undefined>(undefined);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <LoadingComponent content='Loading Cities...' />

  const paginatedCities = ICityService!.handlePagination(currentPage, cities);


  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <CityListHeader />
        <CityContext.Provider
          value={{
            paginatedCities,
            selectedCity,
            currentPage,

            doPaging: handlePageChange,
            selectCity: handleSelectActivity,
            cancelSelectCity: handleCancelSelectActivity
          }}>
          <CityDashboard />
        </CityContext.Provider>
      </Container>
    </>
  );
}

export default App;
