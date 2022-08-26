import { Box, Spinner, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { IHomeDuckInitialState, IPokemon, IPokemonRequest } from '../../../../core/interfaces'
import { PokemonItem } from '../PokemonItem'
import { Container, Grid } from './styles'

interface IPokemonGridProps {
    pokemons: IPokemonRequest | null
    filtersActiveds?: boolean
}
export const PokemonGrid = ({ pokemons, filtersActiveds }: IPokemonGridProps) => {
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const PokemonMap = (results: IPokemon[]) => {
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
                {homeData.error ? <h1>Nenhum Pokemon encontrado</h1> : <>
                    {pokemons !== null ? PokemonMap(pokemons.data) : <Spinner size='lg' />}</>}
            </Grid>
        </Container>
    )
}