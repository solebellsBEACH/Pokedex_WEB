
import { colors } from '../../../../core/helpers';
import styled from 'styled-components'
import { Spinner } from '@chakra-ui/react';

interface IContainerProps {
    readonly color: string;
}

export const Container = styled.button<IContainerProps>`
width: 220px;
height: 175px;
background:${(props) => props.color} ;
display: flex;
align-items:flex-end;
justify-content: center;
border-radius:10px;

`


export const Content = styled.div`
margin-bottom:6%;

`
export const PokemonName = styled.h1`
font-size:18px;

color:${colors().white};
background-color:${colors().gray3};

width: auto;
height:auto;
min-width:100px;
padding:5px 12px;

border-radius:10px;
`

export const StyledSpinner = styled(Spinner)`
position: absolute;
margin:56px 88px;
`