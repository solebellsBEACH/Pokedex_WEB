
import styled from "styled-components";
import { colors } from "../../helpers";
import {AiOutlineClose} from 'react-icons/ai'
interface IRadioButton {
    readonly isActive: boolean;
    
}

export const Container = styled.button<IRadioButton>`
width:105px;
min-height:50px;
margin:6px;
border-radius:4px;
display: flex;
align-items:center;
justify-content:center;
background:${(props) => props.isActive ? colors().blue1 : colors().gray2} ;
`

export const TextButton = styled.h1<IRadioButton>`
font-size:19px;
color:${(props) => props.isActive ? colors().white : colors().gray5} ;
`

export const StyledAiOutlineClose = styled(AiOutlineClose)`

position:absolute;
margin-top:-30px;
margin-left:-85px;
`