import React, { useEffect, useState } from 'react'
import { returnId, capitalizeFirstLetter, pokemonColors, returnPrice, checkDevice } from '../../../../core/hooks'
import { Container, Content, StyledSpinner, PokemonImage, ContentImage, ContentBottom, PokemonName, BaseExperienceContainer, BaseExperienceLabel, AbilityLabel, AbilityValue, VisitButton } from './styles'
import { Box, Collapse, Progress, SimpleGrid, Skeleton, useDisclosure } from '@chakra-ui/react';
import { IPokemon } from '../../../../core/interfaces';
import { api } from '../../../../core/services/api';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useRouter } from 'next/router';
interface IPokemonItemProps {
    index: number; label: string; pokemon: IPokemon,
}
export const PokemonItem = (props: IPokemonItemProps) => {
    const { index, label,  pokemon } = props;

    const router = useRouter();

    let isDevice = false;

    if (typeof window !== 'undefined') {
        isDevice = checkDevice(window)
    }

    const { isOpen, onToggle } = useDisclosure();

    let pokemonColor = { primary: 'red', secondary: 'red', name: 'red' }
    if (pokemon.type != undefined) {
        pokemonColor = pokemonColors({ pokemonType: pokemon.type })
    }

   
    return (
        <>
            {false ?
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
                isLoaded={true}
                color='white'
                fadeDuration={2}
            >

                <Container
                    boxShadow={isOpen ? 'lg' : ''}
                    rounded='md' bg='white'
                    onMouseEnter={() => { onToggle() }}
                    onMouseLeave={() => { onToggle() }}
                    color={pokemon?.type != undefined ? pokemonColors({ pokemonType: pokemon.type }).secondary : 'red'}
                    onClick={() => {
                        if (!isDevice) {
                            router.push({ pathname: '/Pokemon', query: { id: pokemon._id } })
                        }
                    }}
                >

                    <Content
                        color={pokemon.type != undefined ? pokemonColors({ pokemonType: pokemon.type }).secondary : 'red'}
                    >
                        {/* {pokemon.data != undefined ? renderBaseExperience(pokemon.data.base_experience) : <></>} */}
                        <ContentImage
                            color={pokemon.type != undefined ? pokemonColors({ pokemonType: pokemon.type }).primary : 'red'}
                        >

                            <PokemonImage isOpen={isOpen} src={pokemon.front_default} />
                        </ContentImage>
                    </Content>
                    <ContentBottom
                        isOpen={isOpen}>

                        <PokemonName>{isOpen ? capitalizeFirstLetter(label) : `$ ${returnPrice(pokemon.height).toFixed(2)}`}</PokemonName>
                        {pokemon.height != null ?
                            <BaseExperienceContainer>
                                <BaseExperienceLabel>
                                    {pokemon.height} {isOpen ? 'Base Experience' : 'BS'}
                                </BaseExperienceLabel>
                                {pokemon.height < 15 ?
                                    <AiFillCaretDown
                                        color={pokemon.type != undefined ? pokemonColors({ pokemonType: pokemon.type }).primary : 'red'}
                                        size={25}
                                    /> :
                                    <AiFillCaretUp
                                        color={pokemon.type != undefined ? pokemonColors({ pokemonType: pokemon.type }).primary : 'red'}
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
                                <PokemonName>{`$ ${returnPrice(pokemon.height).toFixed(2)}`}</PokemonName>
                                <SimpleGrid columns={1} spacingY='5px'>
                                    {pokemon.stat_value.map((item, index) => {
                                        return <Box
                                            key={index + 'Stats'}
                                            paddingX='10px'
                                            minHeight='40px'>
                                            <AbilityLabel>{capitalizeFirstLetter(item.name)}</AbilityLabel>
                                            <Box
                                                display='flex'
                                                flexDirection='row'
                                                alignItems='center'
                                            >

                                                <Progress
                                                    isAnimated
                                                    hasStripe
                                                    colorScheme={pokemon.type != undefined ? pokemonColors({ pokemonType: pokemon.type }).name : 'gray'}
                                                    size='sm'
                                                    w='75%'
                                                    value={item.stats_value} />
                                                <AbilityValue>{item.stats_value} pts</AbilityValue>
                                            </Box>

                                        </Box>
                                    })}

                                </SimpleGrid>
                                {isDevice ? <div
                                    style={{ width: '100%', display: 'flex', marginTop: '15px' }}
                                >
                                    <VisitButton
                                        onClick={() => {
                                            router.push({ pathname: '/Pokemon', query: { id: pokemon._id } })
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