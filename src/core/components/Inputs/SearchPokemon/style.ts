import styled from 'styled-components'
import { colors } from '../../../helpers'
 
export const StyledInput  = styled.input`
width:70vw;
min-height:50px;
 border-radius: 30px;
 background:${colors().gray2};
text-align:center;
align-items:center;

font-size:14px;
color:${colors().gray5}; 
outline: none;
@media(min-width:920px){
    width:100%;
}

`

export const Container =  styled.form`
width:50vw;
@media(min-width:920px){
    width:70vw;
}


display:flex;
align-items: center;

`