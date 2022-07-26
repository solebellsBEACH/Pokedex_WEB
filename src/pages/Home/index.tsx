import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Carousel, Drawer } from '../../core/components'
import { Container } from '../../pageComplements/home/styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { useDisclosure } from '@chakra-ui/react'
import { PokemonGrid } from '../../pageComplements/home/components'

const HomeComponent = (props:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
  const dispacth = useDispatch();
  
  useEffect(() => {
    dispacth(HomeActions.HomePokemonsRequest({
      offset: 0,
      limit: 20
    }))
  },[props])

  const handleDrawer = () => {
    onOpen()
  }

  return (<>
    <Drawer isOpen={isOpen} onClose={onClose} />
    <Container>
      <Header handleFilterButton={handleDrawer} />
      <Carousel />
      <PokemonGrid pokemons={homeData.pokemons} />
    </Container></>
  )
}

export default HomeComponent;