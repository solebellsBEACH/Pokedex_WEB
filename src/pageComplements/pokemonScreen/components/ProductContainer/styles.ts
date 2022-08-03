import styled from 'styled-components'
import { colors } from '../../../../core/helpers'

export const Container = styled.div`
min-width:700px;
min-height:500px;
width:65vw;
background-color:${colors().background};
display: flex;
flex-direction: row;
padding:10px 10px 20px 10px;

`
interface IContentImagesProps{
    color: string;
}

export const ContentImages = styled.div<IContentImagesProps>`
width:400px;
height:500px;
background-color:${props=>props.color};
display: flex;
padding:1px;
border-radius:10px;
`;

export const ContentImage = styled.div`
border-top-left-radius:10px;
border-top-right-radius:10px;
width:100%;
height:450px;
display: flex;
justify-content: center;
align-items: center;
background-color:${colors().white};
`;

export const ContentData = styled.div`

`;

export const PokemonImage = styled.img``;