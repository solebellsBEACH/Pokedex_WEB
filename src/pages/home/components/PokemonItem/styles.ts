
import { colors } from '../../../../core/helpers';
import styled from 'styled-components'

export const Container = styled.button`
align-items:center;
width: 145px;
height: 120px;

margin:0 0%;
`
interface IContentProps {
    readonly color: string;
}

export const Content = styled.div<IContentProps>`
bottom:0;position:absolute;
width: 145px;
height: 100px;
border-radius:20px;
background-color:${(props) => props.color};
align-items:center;
`
export const PokemonName = styled.h1`
font-size:11px;

color:${colors().white};
background-color:${colors().gray3};

height: 20px;
width: 80%;

position: absolute;
bottom:10px;

align-items:center;
text-align:center;

border-radius:10px;
`