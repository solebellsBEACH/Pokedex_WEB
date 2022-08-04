import React from 'react'

import { Container, ContentImage, ImageLogoPokemon } from './styles'
import { LogoPokemon } from '../../../../assets';
import { useRouter } from 'next/router';

interface IHeaderProps {

}

export const Header = () => {
    const router = useRouter();
    return (
        <Container>
            <ContentImage
                onClick={() => {
                    router.push('/')
                }}
            >
                <ImageLogoPokemon height='100%' src={LogoPokemon} />
            </ContentImage>
        </Container>
    )
}