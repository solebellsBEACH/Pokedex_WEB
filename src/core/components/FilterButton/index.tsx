import React, { useState } from 'react'
import { Container, TextButton } from './styles'

interface ITypePokemonButton {
    label: string, index: number;
    filtersActiveds: string[]; setFiltersActiveds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterButton = ({ index, label, filtersActiveds, setFiltersActiveds }: ITypePokemonButton) => {
const [isActive, setIsActive] = useState<boolean|null>(null)

    const isActiveUtil = () => {
        if (filtersActiveds.find(e => e == label) == undefined) {
            return false
        }
        else {
            return true;
        }

    }

    const handlePress = () => {
        console.log(filtersActiveds)
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
        console.log(filtersActiveds)
    }


    return (
        <Container
            key={index}
            onClick={handlePress}
            isActive={isActive!=null?isActive:isActiveUtil()} >
            <TextButton isActive={isActive!=null?isActive:isActiveUtil()} >{label.charAt(0).toUpperCase() + label.slice(1)}</TextButton>
        </Container>
    )
}