import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon, FilterButton } from './styles'
import { LogoPokemon, LogoConfig } from '../../../../assets';
import Image from 'next/image';

interface IHeaderProps {

}

export const Header = () => {

    return (
        <Container>
            <Content>
                <ContentLeft>
                    <ContentImage><ImageLogoPokemon height='80%' src={LogoPokemon} /></ContentImage>
                </ContentLeft>
                <ContentRight>
                    <FilterButton
                    >
                        <Image src={LogoConfig} />
                    </FilterButton>
                </ContentRight>
            </Content>
        </Container>
    )
}