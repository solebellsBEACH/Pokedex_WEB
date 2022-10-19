import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Drawer, RegisterModal, PokemonTabsGrid } from '../../core/components'
import { Container } from '../../pageComplements/home/styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { useDisclosure } from '@chakra-ui/react'
import { Header, ActiveFiltersGrid, PokemonGrid } from '../../pageComplements/home/components'
import { getToken, insertToken } from '../../core/hooks'

const HomeComponent = (props: any) => {
  const drawerDisclosure = useDisclosure()
  const RegisterModalDisclosure = useDisclosure()

  const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
  const dispatch = useDispatch();
  const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('')
  const [inputState, setInputState] = useState('')

  useEffect(() => {
    dispatch(HomeActions.HomePokemonsRequest({
      offset: 0,
      limit: 20
    }))
    if (getToken() !== 'not Valid') {
      dispatch(HomeActions.getUserRequest())
    }
  }, [props])

  useEffect(() => {
    if (filtersActiveds.length !== 0) {
      setActiveTab(filtersActiveds[0])
    }
  }, [filtersActiveds])

  useEffect(() => {
    if (homeData.userLoginData?.token !== undefined) {
      insertToken(homeData.userLoginData.token)
      dispatch(HomeActions.getUserRequest())
    }
  }, [homeData.userLoginData])

  const handleDrawer = () => {
    drawerDisclosure.onOpen()
  }

  const handleRegisterModal = () => {
    RegisterModalDisclosure.onOpen()
  }
  return (
    <>
      <title>Pokedex</title>
      <RegisterModal
        isOpen={RegisterModalDisclosure.isOpen}
        onClose={RegisterModalDisclosure.onClose}
        onOpen={RegisterModalDisclosure.onOpen}
      />
      <Drawer
        isOpen={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}
        filtersActiveds={filtersActiveds}
        setFiltersActiveds={setFiltersActiveds}
      />
      <Container>
        <Header
        inputState={inputState}
        setInputState={setInputState}
          handleLoginButton={handleRegisterModal}
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