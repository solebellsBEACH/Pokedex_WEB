import styled from 'styled-components'
import Image from 'next/image'
import { colors } from '../../../../core/helpers'


export const Container = styled.div`
width:100%;
margin-top:1.5vh;
display:flex;
justify-content:center;
align-items:center;

`

export const Content = styled.div`
width:95%;
min-height:100px;

display:flex; 
flex-direction:row;
@media(max-width:920px){
    flex-direction:column;
}
`
export const ContentLeft = styled.div`
height:100px;
width:30%;
@media(max-width:920px){
    width:100%;
    flex-direction:column;
}

display: flex;
justify-content:center;
align-items:center;
`
export const ContentRight = styled(ContentLeft)`
width:70%;
flex-direction:row;
@media(max-width:920px){
    width:100%;
}
`
export const ContentImage = styled.div`
`
export const ImageLogoPokemon = styled(Image)`
`

export const FilterButton = styled.button`
margin-left:2vw;
width:50px ;
height:50px ;
border-radius:50px ;
background-color:${colors().gray1};
 
&:hover{
    background-color:${colors().gray2}
}

display: flex;
align-items:center;
justify-content:center;

`