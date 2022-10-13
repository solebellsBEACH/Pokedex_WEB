import styled from 'styled-components'
import { colors } from '../../../../core/helpers'

export const Container = styled.div`
width: 1000px;
min-height:200px;
border: 1px solid ${colors().gray4};
border-left-width:0px;
border-right-width:0px;
display: flex;
flex-direction:row;
/* border-top-width:0px; */
padding:20px 0;
@media (max-width:1250px){
    width: 700px;
};

@media (max-width:830px){
    width: 550px;
};

@media (max-width:630px){
    width: 350px;
};

@media (max-width:420px){
    flex-direction: column;
    align-items: center;
};
`

interface ICartItem {
    pokemonColor: {
        secondary: string;
        primary: string;
        name: string;
    }
}

export const ImageContainer = styled.div<ICartItem>`
background:${props => props.pokemonColor.secondary};
border:1px solid ${props => props.pokemonColor.primary};
width:276px ;
height:288px ;
border-radius:10px;

@media (max-width:420px){
margin-bottom:20px ;
};
`

export const ImageContent = styled.div<ICartItem>`
background:${colors().white};
width:auto ;
height:120px ;
border-radius:10px;
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
display: flex;
justify-content: center;
align-items: center;

`

export const Content =  styled.div`
display:flex;
width: 100%;
justify-content: space-between;
@media (max-width:1250px){
   flex-direction: column;
};
`;