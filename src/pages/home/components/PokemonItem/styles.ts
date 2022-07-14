
import { colors } from '../../../../core/helpers';
import styled from 'styled-components'
import { Spinner } from '@chakra-ui/react';

interface IContainerProps {
    readonly color: string;
}

export const Container = styled.button<IContainerProps>`
width: 190px;
height: 165px;
background:${(props) => props.color} ;
display: flex;
align-items:center;
justify-content: center;
border-radius:10px;
flex-direction:column; 
`


export const Content = styled.div`

`
export const PokemonName = styled.h1`
font-size:17px;

color:${colors().white};
background-color:${colors().gray3};

width: auto;
height:auto;
min-width:100px;
padding:4px 10px;
border-radius:10px;
`

export const StyledSpinner = styled(Spinner)`
position: absolute;
margin:56px 88px;
`

export const PokemonImage = styled.img`
height:100px ;
margin-bottom:10px ;
`