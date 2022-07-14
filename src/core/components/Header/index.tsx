import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon, FilterButton } from './styles'
import { LogoPokemon, LogoConfig } from '../../../assets';
import { SearchPokemonInput } from '../../components';
import Image from 'next/image';

interface IHeaderProps {
    handleFilterButton: () => void
}

export const Header = ({handleFilterButton}:IHeaderProps) => {

    return (
        <Container>
            <Content>
                <ContentLeft>
                    <ContentImage><ImageLogoPokemon height='80%' src={LogoPokemon} /></ContentImage>
                </ContentLeft>
                <ContentRight>
                    <SearchPokemonInput />
                    <FilterButton
                        onClick={handleFilterButton}
                    >
                        <Image src={LogoConfig} />
                    </FilterButton>
                </ContentRight>
            </Content>
        </Container>
    )
}