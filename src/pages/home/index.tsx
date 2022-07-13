import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PokemonImage } from '../../assets'
import { Header, Carousel } from '../../core/components'
import { Container } from './styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'

export const HomeComponent = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(HomeActions.HomePokemonsRequest({
      offset: 0,
      limit: 10
    }))
  }, [])

  return (
    <Container>
      <Header />
      <Carousel />
      {/* <PokemonItem 
      index={1}
      label={'Pokemon'}
      url='2'
      key={2}
      /> */}
    </Container>
  )
}

