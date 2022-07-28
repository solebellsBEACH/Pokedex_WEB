import { Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react'
import { capitalizeFirstLetter } from '../../hooks';
import { Container, TextButton, StyledAiOutlineClose } from './styles'


interface ITypePokemonButton {
    label: string, index: number;
    filtersActiveds: string[]; setFiltersActiveds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterButton = ({ index, label, filtersActiveds, setFiltersActiveds }: ITypePokemonButton) => {
    const [isActive, setIsActive] = useState<boolean | null>(null)
    const [onHover, setOnHover] = useState<boolean>(false)

    const isActiveUtil = () => {
        if (filtersActiveds.find(e => e == label) == undefined) {
            return false
        }
        else {
            return true;
        }

    }

    const handlePress = () => {
        const array = filtersActiveds;
        if (!isActiveUtil()) {
            setIsActive(true)
            array.push(label)
        }
        else {
            setIsActive(false)
            array.splice(array.indexOf(label))
        }
        setFiltersActiveds(array)
    }


    return (
        <Tooltip label={isActive ? `Remover ${capitalizeFirstLetter(label)}` : `Adicionar ${capitalizeFirstLetter(label)}`} aria-label='A tooltip'>
            <Container
                onMouseEnter={() => { setOnHover(true) }}
                onMouseLeave={() => { setOnHover(false) }}
                key={index}
                onClick={handlePress}
                isActive={isActive != null ? isActive : isActiveUtil()} >
                {isActive && onHover ? <StyledAiOutlineClose size={13} /> : <></>}
                <TextButton isActive={isActive != null ? isActive : isActiveUtil()} >{capitalizeFirstLetter(label)}</TextButton>
            </Container>
        </Tooltip>
    )
}