import React, { useState } from 'react'
import { useCapitalizeFirstLetter, usePokemonColors } from '../../../hooks'
import { IPokemon } from '../../../interfaces';
import { Container, PokemonName, Content } from './styles'

interface IPokemonItem {
    index: number; label: string; url: string
}
interface IPokemonData {
    isLoaded: boolean;
    pokemonData: IPokemon | null;
}

export const PokemonItem = ({ index, label, url }: IPokemonItem) => {
    const [pokemonPreRequest, setPreRequestPokemon] = useState<IPokemonData | null>(null)

    const [pokemon, setPokemon] = useState<IPokemon | null>(null)
    return (
        <Container
            key={1}
            onClick={() => {
                console.log('LUCAS')
            }}
        >
            <Content
                color={pokemon != null ? usePokemonColors({ pokemonType: pokemon.types[0].type.name }).primary : 'blue'}
            >
                <PokemonName>{useCapitalizeFirstLetter(label)}</PokemonName>
            </Content>
            {/* {pokemon != null ? <PokemonImage
                height={RFValue(82) + ''}
                uri={pokemon.sprites.other.dream_world.front_default}
            /> : <ActivityIndicator style={{ marginTop: '20%' }} size={40} color='black' />} */}
        </Container>
    )
}