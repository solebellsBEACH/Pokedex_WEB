import styled from 'styled-components'
import { colors } from '../../../../core/helpers'

export const Container = styled.div`
width:1200px;
min-height:500px;
background-color:${colors().background};
display: flex;
flex-direction: row;
padding:10px 10px 20px 10px;
border:1px ${colors().gray1} solid;
border-radius:10px;
`
interface IContentImagesProps {
    color: string;
}

export const ContentImages = styled.div<IContentImagesProps>`
width:400px;
height:500px;
background-color:${props => props.color};
display: flex;
padding:1px;
border-radius:10px;

`;

export const ContentImage = styled.div`
border-top-left-radius:10px;
border-top-right-radius:10px;
width:400px;
height:450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${colors().white};
`;

export const ContentData = styled.div`
width:350px;
min-height:500px;
/* background-color:red; */
margin:0 10px;
`;

export const PokemonTitle = styled.h1`
font-size:22px;
`
export const PokemonImage = styled.img`
`;

export const PromocaoText= styled.div`
display: flex;
font-size:20px;

div{
    font-weight:bold ;
    margin:0 5px;
    color:${colors().green1};
}

#cents{
    margin:0 -1px 0 -3px;
    font-size:10px;
}
`;



export const AbilityLabel = styled.h1`
color:${colors().gray6};
font-style: italic;
font-size:17px;
margin-right:5px;
`;
export const AbilityValue = styled.h1`
color:${colors().gray6};
font-style: italic;
font-size:17px;
margin-left:10px;
`;


export const BaseExperienceContainer = styled.div`
max-width:200px;
min-width:50px;
min-height:30px;
margin:0px 30px 10px 30px;
display: flex;
align-items: center;

`

export const BaseExperienceLabel = styled.h1`
color:${colors().gray6};
font-style: italic;
font-size:17px;
margin-right:5px;
`;


export const ContentPrice = styled.div`
width:380px;
min-height:500px;
margin:0 10px;
`;