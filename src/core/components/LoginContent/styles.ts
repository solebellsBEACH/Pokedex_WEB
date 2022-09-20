
import styled from 'styled-components'
import { colors } from '../../helpers'
import { FaUserCircle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

interface IContainerProps {
    iconsize?: 'sm' | 'lg'
}

export const Container = styled.button<IContainerProps>`
margin-left:1vw;
width:auto ;
margin-right:1vw;
height:${props => props.iconsize == 'sm' ? 30 : 50}px ;
border-radius:50px ;
background-color:${colors().blue1};
filter:saturate(0.6);
 
&:hover{
    filter:saturate(1);
}

display: flex;
align-items:center;
justify-content:center;
color:${colors().white};
font-family:roboto;
font-weight:bold;

padding:10px 20px;

@media (max-width:700px){
    width:50px ;
    padding:0px;
    
}
`

interface IStyledFaUserCircleProps {
    iconsize?: 'sm' | 'lg'
}

export const StyledFaUserCircle = styled(FaUserCircle) <IStyledFaUserCircleProps>`
margin-left:10px;
@media (max-width:1200px){
    margin-left:${props => props.iconsize == 'sm' ? 0 : 10}px;
}
@media (max-width:700px){
    margin-left:0px;
}
`
interface IStyledFiLogOutProps {
    iconsize?: 'sm' | 'lg'
}
export const StyledFiLogOut = styled(FiLogOut) <IStyledFiLogOutProps>`
margin-left:2vw;
@media (max-width:1200px){
    margin-left:${props => props.iconsize == 'sm' ? 2 : 0}vw;
}
@media(max-width:700px){
    margin-top:2vw;
}
&:hover{
    color:blue;
}
`