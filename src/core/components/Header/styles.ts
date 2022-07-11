import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
width:100%;
margin-top:0px;
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
background:blue;
width:70%;
@media(max-width:920px){
    width:100%;
    flex-direction:column;
}
`
export const ContentImage = styled.div`
`
export const ImageLogoPokemon = styled(Image)`
`