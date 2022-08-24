import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon, FilterButton, LoginContent, StyledFaUserCircle } from './styles'
import { LogoPokemon, LogoConfig } from '../../../../assets';
import { SearchPokemonInput } from '../../../../core/components';
import Image from 'next/image';
import { Tooltip, useMediaQuery } from '@chakra-ui/react';

interface IHeaderProps {
    handleFilterButton: () => void
    handleLoginButton: () => void
}

export const Header = ({ handleFilterButton, handleLoginButton }: IHeaderProps) => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    return (

        <Container>
            <Content>
                <ContentLeft>
                    <ContentImage><ImageLogoPokemon height='80%' src={LogoPokemon} /></ContentImage>
                </ContentLeft>
                <ContentRight>
                    <SearchPokemonInput />
                    <Tooltip label='Abrir filtros'>
                        <FilterButton
                            onClick={handleFilterButton}
                        >
                            <Image src={LogoConfig} />
                        </FilterButton>
                    </Tooltip>
                    <Tooltip label='Click para logar'>
                        <LoginContent
                            onClick={handleLoginButton}
                        >
                            {isLargerThan700 ? <>Logar</> : <></>}

                            <StyledFaUserCircle size={23} />
                        </LoginContent>

                    </Tooltip>
                </ContentRight>
            </Content>
        </Container>
    )
}