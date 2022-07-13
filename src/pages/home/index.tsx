import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PokemonImage } from '../../assets'
import { Header, Carousel } from '../../core/components'
import { Container } from './styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { PokemonGrid } from './components'

export const HomeComponent = () => {
  const dispacth = useDispatch();
  const { pokemons } = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

  useEffect(() => {
    dispacth(HomeActions.HomePokemonsRequest({
      offset: 0,
      limit: 20
    }))
  }, [])

  return (
    <Container>
      <Header />
      <Carousel />
      <PokemonGrid pokemons={pokemons}/>
    </Container>
  )
}

