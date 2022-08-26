import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PokemonGrid } from '../../../pageComplements/home/components';
import { IHomeDuckInitialState } from '../../interfaces';
import { Container, TabSelectorContainer, TabSelectorText, ContentTop, ContentBottom } from './styles'
import { Creators as HomeActions } from '../../../core/store/ducks/home'
import { Spinner } from '@chakra-ui/react';
interface IPokemonTabsGrid {
    filtersActiveds: string[];
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
}

export const PokemonTabsGrid = ({ filtersActiveds, setActiveTab, activeTab }: IPokemonTabsGrid) => {

    const dispacth = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    useEffect(() => {
        if(activeTab!==undefined) {
            dispacth(HomeActions.HomePokemonsForTypeRequest({
                page: 0,
                limit: 20,
                pokemonType: activeTab
            }))
        }
        
    }, [activeTab])



    const TabSelector = (props: { label: string }) => {
        const { label } = props;
        return <TabSelectorContainer
            onClick={() => {
                setActiveTab(label)
            }}
            isActive={activeTab == label}>
            <TabSelectorText isActive={activeTab == label}>{label}</TabSelectorText>
        </TabSelectorContainer>
    }
    return (
        <Container>
            <ContentTop>
                {filtersActiveds.map((item, index) => <TabSelector key={index + item} label={item} />)}
            </ContentTop>
            <ContentBottom>
                {homeData.pokemons==null||homeData.pokemons ==undefined?<Spinner size='lg'/>:<PokemonGrid filtersActiveds pokemons={homeData.pokemons} />}
            </ContentBottom>
        </Container>
    )
}