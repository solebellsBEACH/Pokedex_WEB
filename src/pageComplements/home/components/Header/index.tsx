import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon, FilterButton, LoginContent, StyledFaUserCircle } from './styles'
import { LogoPokemon, LogoConfig } from '../../../../assets';
import { SearchPokemonInput } from '../../../../core/components';
import Image from 'next/image';
import { Tooltip, useMediaQuery } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../../../core/interfaces';
import { StringifyOptions } from 'querystring';

interface IHeaderProps {
    handleFilterButton: () => void
    handleLoginButton: () => void
}

export const Header = ({ handleFilterButton, handleLoginButton }: IHeaderProps) => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    const labelLoginButton = ():string => {
        if (homeData.userData !== null)return `Fala ae ${homeData.userData?.data.name}`

        return 'Logar'
    }

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
                    <Tooltip label='Usar outra conta'>
                        <LoginContent
                            onClick={handleLoginButton}
                        >
                            {isLargerThan700 ? <>{labelLoginButton()}</> : <></>}

                            <StyledFaUserCircle size={23} />
                        </LoginContent>

                    </Tooltip>
                </ContentRight>
            </Content>
        </Container>
    )
}