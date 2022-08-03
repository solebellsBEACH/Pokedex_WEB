import { useMediaQuery } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Container, ContentImages, ContentData, ContentImage, PokemonImage } from './styles'
import { Creators as PokemonScreenActions } from '../../../../core/store/ducks/pokemonsScreen'
import { useSelector } from 'react-redux';
import { IPokemonScreenDuckInitialState } from '../../../../core/interfaces';
import { pokemonColors } from '../../../../core/hooks';

interface IProductContainer{
    id:number;
}

export const ProductContainer = (props:IProductContainer) => {

    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(PokemonScreenActions.getPokemonsScreenRequest({ id:props.id }))
    }, [props])

    const pokemonScreenData = useSelector((state: { pokemonScreen: IPokemonScreenDuckInitialState }) => state.pokemonScreen)
    console.log(pokemonScreenData)
    return (
        <Container>
            <ContentImages
            color={pokemonScreenData.pokemonData?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.types[0].type.name }).primary : 'red'}
            >
                <ContentImage>
                <PokemonImage  src={pokemonScreenData.pokemonData?.sprites.other.dream_world.front_default} />
                </ContentImage>
            </ContentImages>
            <ContentData></ContentData>
        </Container>
    )
}