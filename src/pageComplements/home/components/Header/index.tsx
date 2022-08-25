import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon, FilterButton} from './styles'
import { LogoPokemon, LogoConfig } from '../../../../assets';
import { SearchPokemonInput, LoginContent } from '../../../../core/components';
import Image from 'next/image';
import { Tooltip, useMediaQuery } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../../../core/interfaces';


interface IHeaderProps {
    handleFilterButton: () => void
    handleLoginButton: () => void
}

export const Header = ({ handleFilterButton, handleLoginButton }: IHeaderProps) => {
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
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
                    <LoginContent handleLoginButton={handleLoginButton}/>
                </ContentRight>
            </Content>
        </Container>
    )
}