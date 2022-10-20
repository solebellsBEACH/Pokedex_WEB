import { useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    CarouselIMG02,
    CarouselIMG03,
    CarouselIMG04,
    CarouselIMG05,
    CarouselIMG01
} from '../../../assets/carousel'
import { returnSlidesToShow } from './handles'
import {
    Container,
    StyledImage,
    StyledCarousel
} from './styles'

export const Carousel = () => {

    const [slideToShow, setSlideToShow] = useState<number>(1);
    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    useEffect(() => {
        setSlideToShow(returnSlidesToShow(isLargerThan1400, isLargerThan700))
    }, [isLargerThan1400, isLargerThan700])

    return (
        <Container>
            <StyledCarousel
                wrapAround={true}
                animation='zoom'
                slidesToShow={slideToShow}
                withoutControls
                autoplay
            // cellAlign={'center'}
            >
                <StyledImage key='carrosselImagem1' src={CarouselIMG01} />
                <StyledImage key='carrosselImagem2' src={CarouselIMG02} />
                <StyledImage key='carrosselImagem3' src={CarouselIMG03} />
                <StyledImage key='carrosselImagem4' src={CarouselIMG04} />
                <StyledImage key='carrosselImagem5' src={CarouselIMG05} />
            </StyledCarousel >
        </Container>
    )
}