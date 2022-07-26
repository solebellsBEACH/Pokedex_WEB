import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import Image from 'next/image';
import { colors } from '../../helpers';

export const Container = styled.div`
background-color:${colors().gray1};
width:95% ;
padding:2vh 5%;
border-radius:30px;
margin:0 2.5%;

@media(min-width:920px){
    margin-top:2vh
}

`

export const StyledCarousel = styled(Carousel)`
align-items:center;
justify-content:center;

`

export const StyledImage = styled(Image)`
filter:saturate(0.5);
border-radius:8px;

`