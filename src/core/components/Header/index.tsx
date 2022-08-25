import React from 'react'

import { ContentLeft, CarrinhoButton, Container, Content, ContentImage, FavoriteButton, ImageLogoPokemon, ContentRight, StyledLink } from './styles'
import { LogoPokemon } from '../../../assets';
import { useRouter } from 'next/router';
import { Grid, GridItem, Tooltip, useMediaQuery } from '@chakra-ui/react';
import { BsCart3, BsFillHeartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../interfaces';
import { LoginContent } from '../LoginContent';

interface IHeaderProps {

}


export const Header = () => {
    const router = useRouter();
    const [isLargerThan950] = useMediaQuery('(min-width: 950px)');
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const optionsTabs: { name: string, url: string }[] = [{ name: 'Habitats', url: '/' }, { name: 'Habitats', url: '/' }, { name: 'Habitats', url: '/' }]

    return (
        <Container>
            <ContentImage
                onClick={() => {
                    router.push('/')
                }}
            >

                <ImageLogoPokemon src={LogoPokemon} />
            </ContentImage>
            {!isLargerThan950 ? <></> : <Content>
                <ContentLeft>
                    <Grid templateColumns='repeat(5, 1fr)' gap='2vh'>
                        {optionsTabs.map((item, index) => {
                            return <GridItem
                                key={index + item.name}
                                display='flex'
                                alignItems='center'
                                w='auto' h='10'><StyledLink
                                    href={item.url}
                                    key={'Links' + index + item.name}
                                ><a>{item.name}</a></StyledLink></GridItem>
                        })}
                    </Grid>
                </ContentLeft>
                <ContentRight>
                    {homeData.userData !== null ? <>
                        <Tooltip label="Favoritos">
                            <FavoriteButton>
                                <BsFillHeartFill size={20} />
                            </FavoriteButton>
                        </Tooltip>
                        <Tooltip label="Carrinho de compras">
                            <CarrinhoButton>
                                <BsCart3 size={23} />
                            </CarrinhoButton>
                        </Tooltip>
                        <LoginContent size='sm' handleLoginButton={()=>{}}/>
                    </> : <></>}
                </ContentRight>
            </Content>}
        </Container>
    )
}