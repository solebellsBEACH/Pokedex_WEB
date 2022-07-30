import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, Drawer as ChakraDrawer, Wrap, WrapItem, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FilterButton } from '../FilterButton';
import { Creators as PokemonActions } from '../../store/ducks/pokemons'
import { useSelector } from 'react-redux';
import { IPokemonDuckInitialState } from '../../interfaces';
import { capitalizeFirstLetter } from '../../hooks';

interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    filtersActiveds: string[];
    setFiltersActiveds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Drawer = ({ isOpen, onClose, filtersActiveds, setFiltersActiveds }: IDrawerProps) => {


    const dispacth = useDispatch()
    const pokemonData = useSelector((state: { pokemon: IPokemonDuckInitialState }) => state.pokemon)

    useEffect(() => {
        dispacth(PokemonActions.getPokemonTypesRequest())
    }, [isOpen])

    const handleClearFilters = () => {
        setFiltersActiveds([]);
        onClose();
    }

    return (
        <>
            <ChakraDrawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                        color='blue.700'
                        fontWeight='bold'
                    >Filtros

                    </DrawerHeader>

                    <DrawerBody
                    >
                        <Wrap
                            spacingY='10px'
                            spacingX='20px'
                        >
                            {pokemonData?.pokemonTypes?.results.map((item, index) => {
                                return <WrapItem
                                    key={index + item.name}
                                >
                                    <FilterButton
                                        filtersActiveds={filtersActiveds} setFiltersActiveds={setFiltersActiveds}
                                        index={index} key={index} label={capitalizeFirstLetter(item.name)}
                                    />

                                </WrapItem>
                            })}

                        </Wrap>
                        <Button
                            onClick={handleClearFilters}
                            size='lg'
                            colorScheme='blue'
                            marginTop='60px'
                            width='100%'
                            // marginBottom='10px'
                            variant='solid'>
                            Limpar Filtros
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </ChakraDrawer>
        </>
    )
}