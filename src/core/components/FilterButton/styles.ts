
import styled from "styled-components";
import { colors } from "../../helpers";

interface IRadioButton {
    readonly isActive: boolean;
    
}

export const Container = styled.button<IRadioButton>`
width:100px;
min-height:50px;
margin:6px;
border-radius:4px;
align-items:center;
justify-content:center;
background:${(props) => props.isActive ? colors().blue1 : colors().gray2} ;
`

export const TextButton = styled.h1<IRadioButton>`
font-size:19px;
color:${(props) => props.isActive ? colors().white : colors().gray5} ;
`