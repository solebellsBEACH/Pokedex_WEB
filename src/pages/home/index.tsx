import React from 'react'
import { PokemonImage } from '../../assets'
import { Header, Carousel } from '../../core/components'
import { PokemonItem } from '../../core/components/home/PokemonItem'
import { Container } from './styles'

export const HomeComponent = () => {
  return (
    <Container>
      <Header/>
      <Carousel/>
      {/* <PokemonItem 
      index={1}
      label={'Pokemon'}
      url='2'
      key={2}
      /> */}
    </Container>
  )
}

