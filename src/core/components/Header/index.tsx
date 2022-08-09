import React from 'react'

import { CarrinhoButton, Container, Content, ContentImage, FavoriteButton, ImageLogoPokemon } from './styles'
import { LogoPokemon } from '../../../assets';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@chakra-ui/react';
import { BsCart3, BsFillHeartFill} from 'react-icons/bs'

interface IHeaderProps {

}


export const Header = () => {
    const router = useRouter();
    const [isLargerThan660] = useMediaQuery('(min-width: 660px)');

    return (
        <Container>
            <ContentImage
                onClick={() => {
                    router.push('/')
                }}
            >

                <ImageLogoPokemon src={LogoPokemon} />
            </ContentImage>
            {!isLargerThan660 ? <></> : <Content>
                <FavoriteButton>
                <BsFillHeartFill size={20} />
                </FavoriteButton>
                <CarrinhoButton>
                    <BsCart3 size={23} />
                </CarrinhoButton>
            </Content>}
        </Container>
    )
}