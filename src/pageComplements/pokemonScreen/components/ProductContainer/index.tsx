import { Box, Heading, LinkBox, Progress, SimpleGrid, Stat, StatHelpText, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    Container,
    ContentImages,
    ContentData,
    PromocaoText,
    ContentImage,
    PokemonImage,
    PokemonTitle,
    AbilityLabel,
    AbilityValue,
    BaseExperienceContainer,
    BaseExperienceLabel,
    ContentPrice
} from './styles'
import { Creators as PokemonScreenActions } from '../../../../core/store/ducks/pokemonsScreen'
import { useSelector } from 'react-redux';
import { IPokemonScreenDuckInitialState } from '../../../../core/interfaces';
import { capitalizeFirstLetter, pokemonColors, returnPrice } from '../../../../core/hooks';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ErrorData } from '../../../../core/components';
interface IProductContainer {
    id: number;
}

export const ProductContainer = (props: IProductContainer) => {

    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(PokemonScreenActions.getPokemonsScreenRequest({ id: props.id }))
    }, [props])

    const pokemonScreenData = useSelector((state: { pokemonScreen: IPokemonScreenDuckInitialState }) => state.pokemonScreen)

    if (pokemonScreenData.error) {
        return <ErrorData />
    }

    return (
        <Container>
            <ContentImages
                color={pokemonScreenData.pokemonData?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.types[0].type.name }).primary : 'red'}
            >
                <ContentImage>
                    <PokemonImage
                        width='80%'
                        src={pokemonScreenData.pokemonData?.sprites.other.dream_world.front_default} />
                </ContentImage>
            </ContentImages>
            <ContentData>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Heading size='md' my='2'>
                        {capitalizeFirstLetter(pokemonScreenData.pokemonData?.name)}
                    </Heading>
                    <Stat>
                        <StatHelpText>$  {returnPrice(pokemonScreenData.pokemonData?.height * 1.9).toFixed(2)}</StatHelpText>
                    </Stat>
                    <Heading size='lg' my='0'>
                        $ {returnPrice(pokemonScreenData.pokemonData?.height).toFixed(2)}
                    </Heading>
                    <PromocaoText>em<div>10x {(returnPrice(pokemonScreenData.pokemonData?.height) / 10).toFixed(1)}</div><div id='cents'>00</div> <div>sem juros</div></PromocaoText>
                </LinkBox>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' my='5'>
                    <Heading size='lg' my='2'>
                        Abilities
                    </Heading>
                    {pokemonScreenData.pokemonData?.base_experience != null ?
                        <BaseExperienceContainer>
                            <BaseExperienceLabel>
                                {pokemonScreenData.pokemonData?.base_experience}  Base Experience
                            </BaseExperienceLabel>
                            {pokemonScreenData.pokemonData?.base_experience < 100 ?
                                <AiFillCaretDown
                                    color={pokemonScreenData.pokemonData?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.types[0].type.name }).primary : 'red'}
                                    size={25}
                                /> :
                                <AiFillCaretUp
                                    color={pokemonScreenData.pokemonData?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.types[0].type.name }).primary : 'red'}
                                    size={25}
                                />
                            }
                        </BaseExperienceContainer>
                        :
                        <></>}
                    <SimpleGrid columns={1} spacingY='5px'>
                        {pokemonScreenData.pokemonData?.stats.map((item, index) => {
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
                                        colorScheme={pokemonScreenData.pokemonData?.types[0].type.name != undefined ? pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.types[0].type.name }).name : 'gray'}
                                        size='sm'
                                        w='75%'
                                        value={item.base_stat} />
                                    <AbilityValue>{item.base_stat} pts</AbilityValue>
                                </Box>
                            </Box>
                        })}

                    </SimpleGrid>
                </LinkBox>
            </ContentData>
            <ContentPrice>
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' my='0'></LinkBox>
            </ContentPrice>
        </Container>
    )
}