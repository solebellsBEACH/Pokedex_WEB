import { Box, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { IPokemonRequest } from '../../../../core/interfaces'
import { PokemonItem } from '../PokemonItem'
import { Container ,Grid} from './styles'

interface IPokemonGridProps {
    pokemons: IPokemonRequest | null
}
export const PokemonGrid = ({ pokemons }: IPokemonGridProps) => {
    return (
        <Container
        >
            <Grid
            spacing='30px'
            justify='center'
            >
            {pokemons !== null ? pokemons.results.map((item, index) => {
                return <WrapItem
                
                >
                <PokemonItem
                    index={index}
                    label={item.name}
                    url={item.url}
                />
                </WrapItem>

            }) : <></>}
            </Grid>
        </Container>
    )
}