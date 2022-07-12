import type { NextPage } from 'next'
import { Header, Carousel } from '../core/components'
import { Container } from './styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Header/>
      <Carousel/>
    </Container>
  )
}

export default Home
