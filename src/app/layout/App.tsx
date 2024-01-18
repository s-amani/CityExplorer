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
  const [paginatedCities, setPaginatedCities] = useState<City[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [selectedCity, setSelectedCity] = useState<City | undefined>(undefined);
  const [loading, setLoading] = useState(true);


  const { ICityService } = useContext(ServiceContext);

  useEffect(() => {

    // self invoked anonymous async method
    (async () => {

      if (!dataLoaded) {
        // fetch data from the endpoint
        const cityList = await ICityService!.list("name");

        // update props
        setCities(cityList);
      }

      setPaginatedCities(cities.slice(pageNumber, pageNumber + 10));

      setLoading(false);
      setDataLoaded(true);

    })();

  }, [pageNumber, cities, dataLoaded, ICityService]);

  function handleSelectActivity(id: number) {
    setSelectedCity(paginatedCities.find(x => x.geonameid === id));
  }

  function handleCancelSelectActivity() {
    setSelectedCity(undefined);
  }

  function handleListPagination(type: string) {   
    type === 'next' ? 
      setPageNumber((pageNumber) => pageNumber + 10) :
      setPageNumber((pageNumber) => pageNumber - 10);
  }

  if (loading) return <LoadingComponent content='Loading Cities...' />

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <CityListHeader />
        <CityContext.Provider
          value={{
            paginatedCities,
            selectedCity,
            pageNumber,

            doPaging: handleListPagination,
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
