import React from 'react'
import { CarouselIMG02, CarouselIMG03, CarouselIMG04, CarouselIMG05, CarouselIMG01 } from '../../../assets/carousel'
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
                autoplay
            >
                <StyledImage src={CarouselIMG01} />
                <StyledImage src={CarouselIMG02} />
                <StyledImage src={CarouselIMG03} />
                <StyledImage src={CarouselIMG04} />
                <StyledImage src={CarouselIMG05} />
            </StyledCarousel >
        </Container>
    )
}