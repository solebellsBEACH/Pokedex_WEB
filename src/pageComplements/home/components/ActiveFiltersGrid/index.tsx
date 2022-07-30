import { Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { capitalizeFirstLetter } from '../../../../core/hooks';
import { StyledMdOutlineClear, Container, FilterButton as FilterButtonContainer, TextButton, Title, ContentTop } from './styles'

interface IActiveFiltersGrid {
    filtersActiveds: string[];
    setFiltersActiveds: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ActiveFiltersGrid = ({ filtersActiveds, setFiltersActiveds }: IActiveFiltersGrid) => {

    const FilterButton = (props: { item: string, index: number }) => {
        const { item, index } = props;
        const [isActive, setIsActive] = useState(true)
        return <WrapItem
            key={index + item}
        >
            {isActive ?
                <FilterButtonContainer
                    onClick={() => {
                        const array = filtersActiveds;
                        array.splice(array.indexOf(item), 1)
                        setFiltersActiveds(array)
                        setIsActive(false)
                    }}
                >
                    <TextButton>{capitalizeFirstLetter(item)}</TextButton>
                </FilterButtonContainer>
                : <></>}
        </WrapItem>
    }


    return (
        <Container>
            <ContentTop>
                <Title>Filtros</Title>
                <Tooltip
                    label='Limpar filtros'
                >
                    <div
                    onClick={()=>{setFiltersActiveds([])}}
                    ><StyledMdOutlineClear size={25} /></div>
                </Tooltip>
            </ContentTop>

            <Wrap
                spacingY='10px'
                spacingX='20px'
            >
                {filtersActiveds.map((item, index) => <FilterButton item={item} index={index} />)}

            </Wrap>
        </Container>
    )
}