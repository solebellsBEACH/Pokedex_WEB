import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, Drawer as ChakraDrawer, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FilterButton } from '../FilterButton';

interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Drawer = ({ isOpen, onClose }: IDrawerProps) => {

    const [filtersActiveds, setFiltersActiveds] = useState<string[]>([])

    return (
        <>
            <ChakraDrawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                        color='blue.700'
                        fontWeight='bold'
                    >Filtros</DrawerHeader>
                    <DrawerBody
                        >
                        <Wrap
                        spacing='5px'
                            background='blue.100'
                            >
                            {['', '', '', '', '', ''].map((item, index) => {
                                return <WrapItem
                                    key={index + item}
                                >
                                    <FilterButton
                                        filtersActiveds={filtersActiveds} setFiltersActiveds={setFiltersActiveds}
                                        index={index} key={index} label={'item'+index} 
                                        />

                                </WrapItem>
                            })}

                        </Wrap>
                    </DrawerBody>
                </DrawerContent>
            </ChakraDrawer>
        </>
    )
}