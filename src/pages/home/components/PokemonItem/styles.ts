
import { colors } from '../../../../core/helpers';
import styled from 'styled-components'

export const Container = styled.button`
width: 220px;
height: 175px;
background:blue ;
display: flex;
align-items:flex-end;
justify-content: center;
border-radius:10px;

`
interface IContentProps {
    readonly color: string;
}

export const Content = styled.div<IContentProps>`
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