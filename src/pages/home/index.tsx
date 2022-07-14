import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Carousel, Drawer } from '../../core/components'
import { Container } from './styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { PokemonGrid } from './components'
import { useDisclosure } from '@chakra-ui/react'

export const HomeComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(HomeActions.HomePokemonsRequest({
      offset: 0,
      limit: 20
    }))
  }, [])

  const handleDrawer = () => {
    onOpen()
  }

  return (<>
    <Drawer isOpen={isOpen} onClose={onClose}  />
    <Container>
      <Header handleFilterButton={handleDrawer}/>
      <Carousel />
      <PokemonGrid pokemons={homeData.pokemons} />
    </Container></>
  )
}

