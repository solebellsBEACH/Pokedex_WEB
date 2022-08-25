
import styled from 'styled-components'
import { colors } from '../../helpers'
import { FaUserCircle } from 'react-icons/fa'

interface IContainerProps {
    size?: 'sm' | 'lg'
}

export const Container = styled.button<IContainerProps>`
margin-left:1vw;
width:auto ;
height:${props => props.size == 'sm' ? 30 : 50}px ;
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
@media (max-width:1200px){
    width:${props => props.size == 'sm' ? '40px' : 'auto'};
    height:${props => props.size == 'sm' ? '40px' : '30px'};
    padding:${props => props.size == 'sm' ? '0px' : '10px 20px'};
}

@media (max-width:700px){
    width:50px ;
    padding:0px;
}
`

interface IStyledFaUserCircleProps {
    iconSize?: 'sm' | 'lg'
}

export const StyledFaUserCircle = styled(FaUserCircle) <IStyledFaUserCircleProps>`
margin-left:10px;
@media (max-width:1200px){
    margin-left:${props => props.iconSize == 'sm' ? 0 : 10}px;
}
@media (max-width:700px){
    margin-left:0px;
}
`