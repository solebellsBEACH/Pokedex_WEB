import React from 'react'
import { Container, TextButton } from './styles'

interface ITypePokemonButton {
    label: string, index: number;
    filtersActiveds: string[]; setFiltersActiveds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterButton = ({ index, label, filtersActiveds, setFiltersActiveds }: ITypePokemonButton) => {


    const isActive = () => {
        if (filtersActiveds.find(e => e == label) == undefined) {
            return false
        }
        else {
            return true;
        }

    }

    const handlePress = () => {
        const array = filtersActiveds;
        if (!isActive()) {
            array.push(label)
        }
        else {
            array.splice(array.indexOf(label))
        }
        setFiltersActiveds(array)
    }


    return (
        <Container
            key={index}
            onClick={handlePress}
            isActive={isActive()} >
            <TextButton isActive={isActive()} >{label.charAt(0).toUpperCase() + label.slice(1)}</TextButton>
        </Container>
    )
}