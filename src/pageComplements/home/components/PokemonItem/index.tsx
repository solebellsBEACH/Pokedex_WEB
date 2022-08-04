import React, { useEffect, useState } from 'react'
import { returnId, capitalizeFirstLetter, pokemonColors, returnPrice, checkDevice } from '../../../../core/hooks'
import { Container, Content, StyledSpinner, PokemonImage, ContentImage, ContentBottom, PokemonName, BaseExperienceContainer, BaseExperienceLabel, AbilityLabel, AbilityValue, VisitButton } from './styles'
import { Box, Collapse, Progress, SimpleGrid, Skeleton, useDisclosure } from '@chakra-ui/react';
import { IPokemon } from '../../../../core/interfaces';
import { api } from '../../../../core/services/api';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useRouter } from 'next/router';
interface IPokemonItemProps {
    index: number; label: string; url: string
}
export const PokemonItem = (props: IPokemonItemProps) => {
    const { index, label, url } = props;

    const router = useRouter();

    let isDevice = false;

    if (typeof window !== 'undefined') {
        isDevice = checkDevice(window)
    }

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

    useEffect(() => { getPokemon() }, [props]);

    let pokemonColor = { primary: 'red', secondary: 'red', name: 'red' }
    if (pokemon.data?.types[0].type.name != undefined) {
        pokemonColor = pokemonColors({ pokemonType: pokemon.data?.types[0].type.name })
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
                    color={pokemon?.data?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).secondary : 'red'}
                    onClick={() => {
                        if (!isDevice) {
                            router.push({ pathname: '/Pokemon', query: { id: returnId(url) } })
                        }

                        console.log(returnId(url))
                    }}
                >

                    <Content
                        color={pokemon?.data?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).secondary : 'red'}
                    >
                        {/* {pokemon.data != undefined ? renderBaseExperience(pokemon.data.base_experience) : <></>} */}
                        <ContentImage
                            color={pokemon?.data?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).primary : 'red'}
                        >

                            <PokemonImage isOpen={isOpen} src={pokemon.data?.sprites.other.dream_world.front_default} />
                        </ContentImage>
                    </Content>
                    <ContentBottom
                        isOpen={isOpen}>

                        <PokemonName>{isOpen ? capitalizeFirstLetter(label) : `$ ${returnPrice(pokemon.data?.height).toFixed(2)}`}</PokemonName>
                        {pokemon.data?.base_experience != null ?
                            <BaseExperienceContainer>
                                <BaseExperienceLabel>
                                    {pokemon.data?.base_experience} {isOpen ? 'Base Experience' : 'BS'}
                                </BaseExperienceLabel>
                                {pokemon.data?.base_experience < 100 ?
                                    <AiFillCaretDown
                                        color={pokemon?.data?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).primary : 'red'}
                                        size={25}
                                    /> :
                                    <AiFillCaretUp
                                        color={pokemon?.data?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).primary : 'red'}
                                        size={25}
                                    />
                                }
                            </BaseExperienceContainer>
                            :
                            <></>}
                        <Collapse

                            in={isOpen}>
                            <Box
                                width='300px'
                                height='auto'
                                bg='white'
                            >
                                <PokemonName>{`$ ${returnPrice(pokemon.data?.height).toFixed(2)}`}</PokemonName>
                                <SimpleGrid columns={1} spacingY='5px'>
                                    {pokemon.data?.stats.map((item, index) => {
                                        return <Box
                                            key={index + 'Stats'}
                                            paddingX='10px'
                                            minHeight='40px'>
                                            <AbilityLabel>{capitalizeFirstLetter(item.stat.name)}</AbilityLabel>
                                            <Box
                                                display='flex'
                                                flexDirection='row'
                                                alignItems='center'
                                            >

                                                <Progress
                                                    isAnimated
                                                    hasStripe
                                                    colorScheme={pokemon?.data?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemon?.data?.types[0].type.name }).name : 'gray'}
                                                    size='sm'
                                                    w='75%'
                                                    value={item.base_stat} />
                                                <AbilityValue>{item.base_stat} pts</AbilityValue>
                                            </Box>

                                        </Box>
                                    })}

                                </SimpleGrid>
                                {isDevice ? <div
                                    style={{ width: '100%', display: 'flex', marginTop: '15px' }}
                                >
                                    <VisitButton
                                        onClick={() => {
                                            router.push({ pathname: '/Pokemon', query: { id: returnId(url) } })
                                        }}
                                        backgroundColor={pokemonColor.primary}
                                        color={'white'}
                                    >Visitar</VisitButton>

                                </div> : <></>}
                            </Box>
                        </Collapse>
                    </ContentBottom>
                </Container>
            </Skeleton>
        </>
    )
}