import { Container, Header } from 'semantic-ui-react'

export const HomePage = () => {
  return (
    <div className='welcome-container' style={{ marginTop: '7em' }}>
      <div className='welcome'>
        <h1 className='welcome-text'>Welcome to City Explorer App</h1>
        <h4 className='welcome-text'><span>Where you can explore the cities around the globe.</span></h4>
      </div>
    </div>
  )
}

export default HomePage;