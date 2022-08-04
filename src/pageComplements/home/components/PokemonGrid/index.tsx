import { Box, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { IPokemonPreRequest, IPokemonRequest } from '../../../../core/interfaces'
import { PokemonItem } from '../PokemonItem'
import { Container, Grid } from './styles'

interface IPokemonGridProps {
    pokemons: IPokemonRequest | null
    filtersActiveds?: boolean
}
export const PokemonGrid = ({ pokemons, filtersActiveds }: IPokemonGridProps) => {

    const PokemonMap = (results: any[]) => {
        if (results[0]?.pokemon !== undefined) {

            return results.map((item, index) => {
                if (item.pokemon?.name == undefined) {
                    return <div style={{height:'0'}}/>
                 }
                return <WrapItem
                    key={index + item.pokemon?.name}
                >
                    <PokemonItem
                        index={index}
                        label={item.pokemon?.name}
                        url={item.pokemon?.url}
                    />
                </WrapItem>

            })

        }
        return results.map((item, index) => {
            // console.log(item)
            return <WrapItem
                key={index + item.name}
            >
                <PokemonItem
                    index={index}
                    label={item.name}
                    url={item.url}
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

                {pokemons !== null ? PokemonMap(pokemons.results) : <></>}
            </Grid>
        </Container>
    )
}