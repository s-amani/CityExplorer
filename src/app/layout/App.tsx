import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import CityDashboard from '../../features/cities/dashboard/CityDashboard';
import CityListHeader from '../../features/cities/dashboard/CityListHeader';

function App() {

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <CityListHeader />
        <CityDashboard />
      </Container>
    </>
  );
}

export default App;
