import React, { useState } from 'react'
import { IPokemon } from '../../../../core/interfaces';
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../../core/hooks'
import { Container, PokemonName, Content, StyledSpinner } from './styles'
import { Skeleton } from '@chakra-ui/react';

interface IPokemonItemProps {
    index: number; label: string; url: string
}
interface IPokemonData {
    isLoaded: boolean;
    pokemonData: IPokemon | null;
}

export const PokemonItem = ({ index, label, url }: IPokemonItemProps) => {
    const [pokemonPreRequest, setPreRequestPokemon] = useState<IPokemonData | null>(null)

    const [pokemon, setPokemon] = useState<IPokemon | null>(null)
    return (
        <>
            {!pokemonPreRequest?.isLoaded ? <StyledSpinner
                thickness='4px'
                speed='0.80s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            /> : <></>}
            <Skeleton
                isLoaded={pokemonPreRequest?.isLoaded}
                color='white'
                fadeDuration={2}
            >
                <Container
                    key={index + label}
                    onClick={() => {
                        console.log('LUCAS')
                    }}
                >
                    <Content
                        color='red'
                    // color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.types[0].type.name }).primary : 'blue'}
                    >
                        <PokemonName>{useCapitalizeFirstLetter(label)}</PokemonName>
                    </Content>
                    {/* {pokemon != null ? <PokemonImage
                height={RFValue(82) + ''}
                uri={pokemon.sprites.other.dream_world.front_default}
            /> : <ActivityIndicator style={{ marginTop: '20%' }} size={40} color='black' />} */}
                </Container>
            </Skeleton>
        </>
    )
}