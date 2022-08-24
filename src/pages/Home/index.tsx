import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Carousel, Drawer, LoginModal, PokemonTabsGrid } from '../../core/components'
import { Container } from '../../pageComplements/home/styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { useDisclosure } from '@chakra-ui/react'
import { Header, ActiveFiltersGrid, PokemonGrid } from '../../pageComplements/home/components'

const HomeComponent = (props: any) => {
  const drawerDisclosure = useDisclosure()
  const loginModalDisclosure = useDisclosure()

  const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
  const dispacth = useDispatch();
  const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    dispacth(HomeActions.HomePokemonsRequest({
      offset: 0,
      limit: 20
    }))
  }, [props])

  useEffect(() => {
    if (filtersActiveds.length !== 0) {
      setActiveTab(filtersActiveds[0])
    }
  }, [filtersActiveds])

  const handleDrawer = () => {
    drawerDisclosure.onOpen()
  }

  const handleLoginModal = () => {
    loginModalDisclosure.onOpen()
  }
  return (
  <>
  <LoginModal
  isOpen={loginModalDisclosure.isOpen}
  onClose={loginModalDisclosure.onClose}
  onOpen={loginModalDisclosure.onOpen}
  />
    <Drawer
      isOpen={drawerDisclosure.isOpen}
      onClose={drawerDisclosure.onClose}
      filtersActiveds={filtersActiveds}
      setFiltersActiveds={setFiltersActiveds}
    />
    <Container>
      <Header 
      handleLoginButton={handleLoginModal}
      handleFilterButton={handleDrawer} />
      <Carousel />
      {filtersActiveds.length == 0 ? <></> :
        <ActiveFiltersGrid
          filtersActiveds={filtersActiveds}
          setFiltersActiveds={setFiltersActiveds}
        />
      }
      {filtersActiveds.length == 0 ?
        <PokemonGrid pokemons={homeData.pokemons} /> :
        <PokemonTabsGrid
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          filtersActiveds={filtersActiveds}
        />}
    </Container></>
  )
}

export default HomeComponent;