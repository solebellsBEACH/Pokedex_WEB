import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon, FilterButton, ContentButtons } from './styles'
import { LogoPokemon, LogoConfig } from '../../../../assets';
import { SearchPokemonInput, LoginContent } from '../../../../core/components';
import Image from 'next/image';
import { Tooltip, useMediaQuery } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../../../core/interfaces';

import { BsCart3 } from 'react-icons/bs'
import { useRouter } from 'next/router';
interface IHeaderProps {
    handleFilterButton: () => void
    handleLoginButton: () => void
    inputState: string
    setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({ handleFilterButton, handleLoginButton, inputState, setInputState}: IHeaderProps) => {
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const router = useRouter();
    return (

        <Container>
            <Content>
                <ContentLeft>
                    <ContentImage><ImageLogoPokemon height='80%' src={LogoPokemon} /></ContentImage>
                </ContentLeft>
                <ContentRight>
                    <SearchPokemonInput 
                     inputState={inputState}
                     setInputState={setInputState}
                    />

                    <ContentButtons>
                        <Tooltip label='Abrir filtros'>
                            <FilterButton
                                onClick={handleFilterButton}
                            >
                                <Image src={LogoConfig} />
                            </FilterButton>
                        </Tooltip>
                        <Tooltip label='Abrir Cart'>
                            <FilterButton
                                onClick={
                                    () => {
                                        router.push('/Cart')
                                    }
                                }
                            >
                                <BsCart3 size={25} />
                            </FilterButton>
                        </Tooltip>
                        <LoginContent handleLoginButton={handleLoginButton} />
                    </ContentButtons>
                </ContentRight>

            </Content>
        </Container>
    )
}