
import { colors } from '../../../../core/helpers';
import styled from 'styled-components'
import { Spinner } from '@chakra-ui/react';

interface IContainerProps {
    readonly color: string;
}

export const Container = styled.button<IContainerProps>`
width: 300px;
height: 450px;
background:${(props) => props.color} ;
display: flex;
border-radius:8px;
flex-direction:column; 
padding:8px 5px;
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
export const PokemonName = styled.h1`
font-size:17px;
color:${colors().gray6};
font-weight:bold;
`

export const StyledSpinner = styled(Spinner)`
position: absolute;
margin:56px 88px;
`

export const PokemonImage = styled.img`
height:120px ;
margin:20px 20px;
`

export const ContentImage =styled.div<IContainerProps>`
    width:85%;
    height:150px;
    background:${(props) => props.color} ;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
`;