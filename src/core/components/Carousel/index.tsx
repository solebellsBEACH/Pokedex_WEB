import React from 'react'
import { CarouselIMG02 } from '../../../assets/carousel'
import { Container, StyledImage } from './styles'


export const Carousel = () => {
    return (
        <Container
            wrapAround={true}
            animation='zoom'
        >
            <StyledImage src={CarouselIMG02} />
            <StyledImage src={CarouselIMG02} />
            <StyledImage src={CarouselIMG02} />
        </Container>
    )
}