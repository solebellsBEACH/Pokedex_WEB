import React, { useEffect, useState } from 'react'
import { returnId, useCapitalizeFirstLetter, usePokemonColors } from '../../../../core/hooks'
import { Container, PokemonName, Content, StyledSpinner } from './styles'
import { Skeleton } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IPokemon, IPokemonDuckInitialState } from '../../../../core/interfaces';
import { useDispatch } from 'react-redux';
import { Creators as PokemonActions } from '../../../../core/store/ducks/pokemons'
import { api } from '../../../../core/services/api';
interface IPokemonItemProps {
    index: number; label: string; url: string
}
export const PokemonItem = ({ index, label, url }: IPokemonItemProps) => {

    const [pokemon, setPokemon] = useState<{ error: boolean, isLoaded: boolean, data: IPokemon | null }>({ error: false, isLoaded: false, data: null })

    const getPokemon = async () => {
        try {
            const { data } = await api.get(`pokemon/${returnId(url)}`)
            setPokemon({ error: false, isLoaded: true, data })
        } catch (error) {
            setPokemon({ error: true, isLoaded: true, data: null })
        }
    }

    useEffect(() => { getPokemon() }, [])

    return (
        <>
            {!pokemon.isLoaded ? <StyledSpinner
                thickness='4px'
                speed='0.80s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            /> : <></>}
            <Skeleton
                key={index + label}
                isLoaded={pokemon.isLoaded}
                color='white'
                fadeDuration={2}
            >
                <Container
                    color={pokemon?.data?.types[0].type.name != undefined ? usePokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).primary : 'red'}
                    onClick={() => {
                        console.log('LUCAS')
                    }}
                >
                    <Content

                    >
                        <PokemonName>{useCapitalizeFirstLetter(label)}</PokemonName>
                    </Content>
                </Container>
            </Skeleton>
        </>
    )
}