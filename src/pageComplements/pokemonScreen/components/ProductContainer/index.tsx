import { Box, Button, Heading, LinkBox, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Progress, SimpleGrid, Stat, StatHelpText, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
    ContentPrice,
    FreteText,
    EstoqueContent,
    ContentBuyButtons,
    BuyButton,
    AddInfoContent,
    InfoContent
} from './styles'
import { Creators as PokemonScreenActions } from '../../../../core/store/ducks/pokemonsScreen'
import { useSelector } from 'react-redux';
import { IPokemonScreenDuckInitialState } from '../../../../core/interfaces';
import { capitalizeFirstLetter, pokemonColors, returnPrice } from '../../../../core/hooks';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineSafety, AiOutlineTrophy } from "react-icons/ai";
import { ErrorData } from '../../../../core/components';
import { BsTruck, BsChevronDown, BsAward } from 'react-icons/bs'
import { colors } from '../../../../core/helpers';

interface IProductContainer {
    id: number;
}

export const ProductContainer = (props: IProductContainer) => {

    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const dispacth = useDispatch();
    const [quant, setQuant] = useState({ value: 1, label: '1 unidade' })

    useEffect(() => {
        dispacth(PokemonScreenActions.getPokemonsScreenRequest({ id: props.id }))
    }, [props])

    const pokemonScreenData = useSelector((state: { pokemonScreen: IPokemonScreenDuckInitialState }) => state.pokemonScreen)



    let pokemonColor = { primary: 'red', secondary: 'red', name: 'red' }
    if (pokemonScreenData.pokemonData?.types[0].type.name != undefined) {
        pokemonColor = pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.types[0].type.name })
    }

    if (pokemonScreenData.error) {
        return <ErrorData />
    }
    return (
        <Container>
            <ContentImages
                color={pokemonColor.primary}
            >
                <ContentImage>
                    <PokemonImage
                        width='70%'
                        src={pokemonScreenData.pokemonData?.sprites.other.dream_world.front_default} />
                </ContentImage>
            </ContentImages>
            <ContentData>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Heading size='md' my='2'>
                        {capitalizeFirstLetter(pokemonScreenData?.pokemonData?.name)}
                    </Heading>
                    <Stat>
                        <StatHelpText>$  {(returnPrice(pokemonScreenData?.pokemonData?.height) * 1.8).toFixed(2)}</StatHelpText>
                    </Stat>
                    <Heading size='lg' my='0'>
                        $ {returnPrice(pokemonScreenData.pokemonData?.height).toFixed(2)}
                    </Heading>
                    <PromocaoText>em<div style={{ color: pokemonColor.primary }}>10x {(returnPrice(pokemonScreenData.pokemonData?.height) / 10).toFixed(1)}</div><div style={{ color: pokemonColor.primary }} id='cents'>00</div> <div style={{ color: pokemonColor.primary }}>sem juros</div></PromocaoText>
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
                                    color={pokemonColor.primary}
                                    size={25}
                                /> :
                                <AiFillCaretUp
                                    color={pokemonColor.primary}
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
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' my='0'>
                    <FreteText
                        color={pokemonColor.primary}
                    ><BsTruck size='20' style={{ marginRight: '10px' }} />Chegará grátis quinta-feira, 18 de agosto</FreteText>
                    <Heading size='sm' my='2'>
                        Estoque disponível
                    </Heading>
                    <EstoqueContent><h1>Quatidade:</h1>
                        <Menu>
                            <MenuButton
                                fontWeight='bold'
                                fontSize='18px'
                            >
                                {quant.label}
                            </MenuButton>
                            <MenuList
                            >
                                {[
                                    { value: 1, label: '1 unidade' },
                                    { value: 2, label: '2 unidades' },
                                    { value: 3, label: '3 unidades' },
                                    { value: 4, label: '4 unidades' },
                                    { value: 5, label: '5 unidades' },
                                ].map((item, index) =>
                                    <MenuItem

                                        key={'MenuItem' + index}
                                        onClick={() => { setQuant(item) }}
                                    >
                                        {item.label}
                                    </MenuItem>)}
                            </MenuList>
                        </Menu>
                        <div id='downIcon'><BsChevronDown size={12} /></div>
                        <h2>100 disponíveis</h2></EstoqueContent>
                    <ContentBuyButtons>
                        <BuyButton
                            backgroundColor={pokemonColor.primary}
                            color={'white'}
                        >Comprar agora</BuyButton>
                        <BuyButton
                            backgroundColor={pokemonColor.secondary}
                            color={colors().gray6}
                        >Adicionar ao carrinho</BuyButton>
                    </ContentBuyButtons>
                    <AddInfoContent>
                        {[{ text: 'Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.', icon: <AiOutlineSafety /> },
                        { text: 'Mercado Pontos. Você acumula 4086 pontos.', icon: <AiOutlineTrophy /> },
                        { text: '12 meses de garantia de fábrica.', icon: <BsAward /> },
                        ].map((item, index) => {
                            return <InfoContent
                                key={'AddInfoContent' + index}
                            >
                                {item.icon}<div>{item.text}</div>
                            </InfoContent>

                        })}
                    </AddInfoContent>

                </LinkBox>
            </ContentPrice>
        </Container>
    )
}