import { Container, Header } from 'semantic-ui-react'

export const HomePage = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <Header as='h1'>Welcome to City Explorer App</Header>
      <Header as='h4' color='grey'>Where you can explore the cities around the globe.</Header>
    </Container>
  )
}

export default HomePage;