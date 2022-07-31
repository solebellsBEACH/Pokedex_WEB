import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Carousel, Drawer, PokemonTabsGrid } from '../../core/components'
import { Container } from '../../pageComplements/home/styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { useDisclosure } from '@chakra-ui/react'
import { ActiveFiltersGrid, PokemonGrid } from '../../pageComplements/home/components'

const HomeComponent = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    if (filtersActiveds.length != 0) {
      setActiveTab(filtersActiveds[0])
    }
  }, [filtersActiveds])

  const handleDrawer = () => {
    onOpen()
  }

  return (<>
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      filtersActiveds={filtersActiveds}
      setFiltersActiveds={setFiltersActiveds}
    />
    <Container>
      <Header handleFilterButton={handleDrawer} />
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