import styled from 'styled-components'

export const Container = styled.div`
width:100%;
margin-top:10px;
display:flex;
justify-content:center;
align-items:center;

`

export const Content = styled.div`
width:95%;
min-height:100px;
background-color:blue;
display:flex; 
flex-direction:row;
@media(max-width:920px){
    flex-direction:column;
}
`
export const ContentLeft = styled.div`
background-color:red;
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
background-color:green;
width:70%;
@media(max-width:920px){
    width:100%;
    flex-direction:column;
}
`
export const ContentImage = styled.div`
min-width:250px;
width:60% ;
height:70% ;
background:black;
`