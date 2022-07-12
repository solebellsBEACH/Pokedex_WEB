import React, { useEffect } from 'react'
import { CarouselIMG02 } from '../../../assets/carousel'
import { Container, StyledImage, StyledCarousel } from './styles'


export const Carousel = () => {
        return (
            <Container>
                <StyledCarousel
                    wrapAround={true}
                    animation='zoom'
                    slidesToShow={3}
                    cellAlign='center'
                    withoutControls
                >
                    <StyledImage src={CarouselIMG02} />
                    <StyledImage src={CarouselIMG02} />
                    <StyledImage src={CarouselIMG02} />
                    <StyledImage src={CarouselIMG02} />
                </StyledCarousel >
            </Container>
        )
    }