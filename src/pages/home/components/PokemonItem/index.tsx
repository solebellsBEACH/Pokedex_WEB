import React, { useEffect, useState } from 'react'
import { returnId, useCapitalizeFirstLetter, usePokemonColors } from '../../../../core/hooks'
import { Container, Content, StyledSpinner, PokemonImage, ContentImage, ContentBottom } from './styles'
import { Box, Collapse, Skeleton, useDisclosure } from '@chakra-ui/react';
import { IPokemon } from '../../../../core/interfaces';
import { api } from '../../../../core/services/api';
import { BaseExperienceContainer, BaseExperienceLabel, BaseExperiencePokemonName } from './baseExperienceStyles';
interface IPokemonItemProps {
    index: number; label: string; url: string
}
export const PokemonItem = ({ index, label, url }: IPokemonItemProps) => {

    const [pokemon, setPokemon] = useState<{ error: boolean, isLoaded: boolean, data: IPokemon | null }>({ error: false, isLoaded: false, data: null })

    const { isOpen, onToggle } = useDisclosure()

    const getPokemon = async () => {
        try {
            const { data } = await api.get(`pokemon/${returnId(url)}`)
            setPokemon({ error: false, isLoaded: true, data })
        } catch (error) {
            setPokemon({ error: true, isLoaded: true, data: null })
        }
    }

    useEffect(() => { getPokemon() }, []);

    const renderBaseExperience = (baseExperience: number): JSX.Element => {
        return <BaseExperienceContainer>
            <BaseExperiencePokemonName>{useCapitalizeFirstLetter(label)}</BaseExperiencePokemonName>
            <BaseExperienceLabel
                color={pokemon?.data?.types[0].type.name != undefined ? usePokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).primary : 'red'}
            >120 PS</BaseExperienceLabel>
        </BaseExperienceContainer>
    }

    return (
        <>
            {!pokemon.isLoaded ?
                <StyledSpinner
                    thickness='4px'
                    speed='0.80s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                : <></>}
            <Skeleton
                key={index + label}
                isLoaded={pokemon.isLoaded}
                color='white'
                fadeDuration={2}
            >

                <Container
                    boxShadow={isOpen ? 'lg' : ''}
                    rounded='md' bg='white'
                    onMouseEnter={() => { onToggle() }}
                    onMouseLeave={() => { onToggle() }}
                    color={pokemon?.data?.types[0].type.name != undefined ? usePokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).secondary : 'red'}
                    onClick={() => {
                        console.log(returnId(url))
                    }}
                >
                    <Content
                        color={pokemon?.data?.types[0].type.name != undefined ? usePokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).secondary : 'red'}
                    >
                        {/* {pokemon.data != undefined ? renderBaseExperience(pokemon.data.base_experience) : <></>} */}
                        <ContentImage
                            color={pokemon?.data?.types[0].type.name != undefined ? usePokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).primary : 'red'}
                        >

                            <PokemonImage isOpen={isOpen} src={pokemon.data?.sprites.other.dream_world.front_default} />
                        </ContentImage>
                    </Content>
                    <ContentBottom>
                        <Collapse in={isOpen}>
                            <Box
                                width='300px'
                                height='300px'
                                bg='white'
                            >
                            </Box>
                        </Collapse>
                    </ContentBottom>
                </Container>
            </Skeleton>
        </>
    )
}