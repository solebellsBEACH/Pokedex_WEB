
import { colors } from '../../../../core/helpers';
import styled from 'styled-components'
import { Spinner, Stack } from '@chakra-ui/react';

interface IContainerProps {
    readonly color: string;
}

export const Container = styled(Stack) <IContainerProps>`
width: 300px;
min-height: 200px;
/* height: 450px; */
background:${(props) => props.color} ;
display: flex;
border-radius:8px;
flex-direction:column; 

`


export const Content = styled.div<IContainerProps>`
background:${(props) => props.color} ;
display: flex;
width:100%; 
height:100% ;
border-radius:5px;
align-items: center;
padding:20px 0px;
flex-direction:column;
`


export const StyledSpinner = styled(Spinner)`
position: absolute;
margin:56px 88px;
`
interface IPokemonImageProps {
    isOpen: boolean;
}

export const PokemonImage = styled.img<IPokemonImageProps>`
height:${props => props.isOpen ? 160 : 130}px;
margin:20px 20px;
`

export const ContentImage = styled.div<IContainerProps>`
    width:85%;
    height:150px;
    /* background:${(props) => props.color} ; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
`;

export const ContentBottom = styled.div<IPokemonImageProps>`
width:100%;
min-height:80px;
background:${colors().white};
padding-bottom:${props => props.isOpen ? 30 : 0}px ;
padding-top:5px ;
`;

export const PokemonName = styled.h1`
color:${colors().gray6};
font-weight:bold;
font-size:19px;
margin:10px 20px 5px 20px;
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