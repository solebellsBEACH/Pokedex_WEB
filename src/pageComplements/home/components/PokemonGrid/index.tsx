import { Box, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { IPokemon, IPokemonRequest } from '../../../../core/interfaces'
import { PokemonItem } from '../PokemonItem'
import { Container, Grid } from './styles'

interface IPokemonGridProps {
    pokemons: IPokemonRequest | null
    filtersActiveds?: boolean
}
export const PokemonGrid = ({ pokemons, filtersActiveds }: IPokemonGridProps) => {
console.log(pokemons)
    const PokemonMap = (results: IPokemon[]) => {
        console.log(results)
        if (results !== undefined && pokemons != null) {

            return results.map((item, index) => {
                if (item.name == undefined) {
                    return <div style={{ height: '0' }} />
                }
                return <WrapItem
                    key={index + item.name}
                >
                    <PokemonItem
                        pokemon={item}
                        index={index}
                        label={item.name}
                    />
                </WrapItem>

            })

        }

        return results?.map((item, index) => {
            return <WrapItem
                key={index + item.name}
            >
                <PokemonItem
                    pokemon={item}
                    index={index}
                    label={item.name}
                />
            </WrapItem>

        })
    }
    return (
        <Container
        >
            <Grid
                spacingX='20px'
                spacingY='30px'
                justify='center'
            >

                {pokemons !== null ? PokemonMap(pokemons.data) : <></>}
            </Grid>
        </Container>
    )
}