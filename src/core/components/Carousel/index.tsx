import { useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CarouselIMG02, CarouselIMG03, CarouselIMG04, CarouselIMG05, CarouselIMG01 } from '../../../assets/carousel'
import { Container, StyledImage, StyledCarousel } from './styles'


export const Carousel = () => {

    const [slideToShow, setSlideToShow] = useState(1);
    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    useEffect(() => {
        if ([isLargerThan1400, isLargerThan700].toString() == [true, true].toString()) {
            setSlideToShow(3)
        }
        if ([isLargerThan1400, isLargerThan700].toString() == [false, true].toString()) {
            setSlideToShow(2)
        }
        if ([isLargerThan1400, isLargerThan700].toString() == [false, false].toString()) {
            setSlideToShow(1)
        }
    }, [isLargerThan1400, isLargerThan700])

    return (
        <Container>
            <StyledCarousel
                wrapAround={true}
                animation='zoom'
                slidesToShow={3}
                withoutControls
                autoplay
                // cellAlign={'center'}
                
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