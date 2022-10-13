import { Box, Button, Heading, LinkBox, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Progress, SimpleGrid, Spinner, Stat, StatHelpText, useMediaQuery, useToast } from '@chakra-ui/react'
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
import { Creators as PokemonActions } from '../../../../core/store/ducks/pokemons'
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState, IPokemonDuckInitialState, IPokemonScreenDuckInitialState } from '../../../../core/interfaces';
import { capitalizeFirstLetter, pokemonColors, returnPrice } from '../../../../core/hooks';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineSafety, AiOutlineTrophy } from "react-icons/ai";
import { ErrorData } from '../../../../core/components';
import { BsTruck, BsChevronDown, BsAward } from 'react-icons/bs'
import { colors } from '../../../../core/helpers';

interface IProductContainer {
    id: string;
}

export const ProductContainer = (props: IProductContainer) => {

    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const dispatch = useDispatch();
    const [quant, setQuant] = useState({ value: 1, label: '1 unidade' })

    useEffect(() => {
        dispatch(PokemonScreenActions.getPokemonsScreenRequest({ id: props.id }))
    }, [props])
    const toast = useToast()
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const pokemonScreenData = useSelector((state: { pokemonScreen: IPokemonScreenDuckInitialState }) => state.pokemonScreen)
    const pokemonData = useSelector((state: { pokemon: IPokemonDuckInitialState }) => state.pokemon)

    console.log(homeData.userData?.data.cart)

    let pokemonColor = { primary: 'red', secondary: 'red', name: 'red' }
    if (pokemonScreenData.pokemonData?.data[0].type != undefined) {
        pokemonColor = pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.data[0].type })
    }

    if (pokemonScreenData.error) {
        return <ErrorData />
    }

    const handleAddProductInCardButton = () => {
        if (pokemonScreenData.pokemonData?.data[0] == undefined) return
        const { _id, name, front_default, height, type } = pokemonScreenData.pokemonData?.data[0]
        const data = { _id, name, front_default, height, type }
        dispatch(PokemonActions.addPokemonInCartRequest(data))
        if (pokemonData.addPokemonInCartError) {
            toast({
                position: 'top',
                title: 'Ops, algo deu errado',
                description: "Erro em adicionar o pokemon em seu carrinho",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                position: 'top',
                title: 'Sucesso',
                description: "O pokemon foi adicionado em seu carrinho com sucesso",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return (
        <Container>
            <title>{capitalizeFirstLetter(pokemonScreenData.pokemonData?.data[0].name)}</title>
            <ContentImages
                color={pokemonColor.primary}
            >
                <ContentImage>
                    <PokemonImage
                        width='70%'
                        src={pokemonScreenData.pokemonData?.data[0].front_default} />
                </ContentImage>
            </ContentImages>
            <ContentData>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Heading size='md' my='2'>
                        {capitalizeFirstLetter(pokemonScreenData.pokemonData?.data[0].name)}
                    </Heading>
                    <Stat>
                        <StatHelpText>$  {(returnPrice(pokemonScreenData.pokemonData?.data[0].height) * 1.8).toFixed(2)}</StatHelpText>
                    </Stat>
                    <Heading size='lg' my='0'>
                        $ {returnPrice(pokemonScreenData.pokemonData?.data[0].height).toFixed(2)}
                    </Heading>
                    <PromocaoText>em<div style={{ color: pokemonColor.primary }}>10x {(returnPrice(pokemonScreenData.pokemonData?.data[0].height) / 10).toFixed(1)}</div><div style={{ color: pokemonColor.primary }} id='cents'>00</div> <div style={{ color: pokemonColor.primary }}>sem juros</div></PromocaoText>
                </LinkBox>
                <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' my='5'>
                    <Heading size='lg' my='2'>
                        Abilities
                    </Heading>
                    {pokemonScreenData.pokemonData?.data[0].height != null ?
                        <BaseExperienceContainer>
                            <BaseExperienceLabel>
                                {pokemonScreenData.pokemonData?.data[0].height}  Base Experience
                            </BaseExperienceLabel>
                            {pokemonScreenData.pokemonData?.data[0].height < 100 ?
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
                        {pokemonScreenData.pokemonData?.data[0].stat_value.map((item, index) => {
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
                                        colorScheme={pokemonScreenData.pokemonData?.data[0].type != undefined ? pokemonColors({ pokemonType: pokemonScreenData.pokemonData?.data[0].type }).name : 'gray'}
                                        size='sm'
                                        w='75%'
                                        value={item.stats_value} />
                                    <AbilityValue>{item.stats_value} pts</AbilityValue>
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
                            onClick={handleAddProductInCardButton}
                            backgroundColor={pokemonColor.secondary}
                            color={colors().gray6}
                        >
                            {pokemonData.addPokemonInCartLoading ?
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='md'
                                /> :
                                <>
                                    Adicionar ao carrinho

                                </>
                            }
                        </BuyButton>
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