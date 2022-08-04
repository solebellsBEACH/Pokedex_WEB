import styled from 'styled-components'
import { colors } from '../../../../core/helpers'

export const Container = styled.div`
margin-bottom:150px;
width:1200px;
min-height:500px;
background-color:${colors().background};
display: flex;
flex-direction: row;
padding:10px 10px 20px 10px;
border:1px ${colors().gray1} solid;
border-radius:10px;

@media(max-width:1250px){
    flex-direction: column;
    width:auto;
    justify-content: center;
    align-items: center;
}
`
interface IContentImagesProps {
    color: string;
}

export const ContentImages = styled.div<IContentImagesProps>`
width:400px;
height:500px;
background-color:${props => props.color};
display: flex;
padding:1px;
border-radius:10px;

`;

export const ContentImage = styled.div`
border-top-left-radius:10px;
border-top-right-radius:10px;
width:400px;
height:450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${colors().white};
`;

export const ContentData = styled.div`
width:350px;
min-height:500px;
/* background-color:red; */
margin:0 10px;

@media(max-width:1250px){
    margin:30px 10px 10px 10px;
    width:380px;
}
`;

export const PokemonTitle = styled.h1`
font-size:22px;
`
export const PokemonImage = styled.img`
`;

export const PromocaoText = styled.div`
display: flex;
font-size:20px;

div{
    font-weight:bold ;
    margin:0 5px;
    color:${colors().green1};
}

#cents{
    margin:0 -1px 0 -3px;
    font-size:10px;
}
`;



export const AbilityLabel = styled.h1`
color:${colors().gray6};
font-style: italic;
font-size:17px;
margin-right:5px;
`;
export const AbilityValue = styled.h1`
color:${colors().gray6};
font-style: italic;
font-size:17px;
margin-left:10px;
`;


export const BaseExperienceContainer = styled.div`
max-width:200px;
min-width:50px;
min-height:30px;
margin:0px 30px 10px 30px;
display: flex;
align-items: center;

`

export const BaseExperienceLabel = styled.h1`
color:${colors().gray6};
font-style: italic;
font-size:17px;
margin-right:5px;
`;


export const ContentPrice = styled.div`
width:380px;
min-height:500px;
margin:0 10px;
`;

export const FreteText = styled.div<IContentImagesProps>`
display: flex;
align-items: center;
color:${props => props.color};
font-weight:bold;
font-size:15px;
margin-bottom:30px;
filter:saturate(2);
`;

export const EstoqueContent = styled.div`
width:100%; 
min-height:30px;
display: flex;
align-items: center;
margin-top:20px;
h1{
margin-right:5px ;
font-size:18px;
}
h2{
margin-left:5px ;
font-size:12px;
color:${colors().gray4};
}
#downIcon{
    margin-left:5px

}

`
export const ContentBuyButtons = styled.div`
width:100% ;
height:110px;
margin-top:30px;
display:flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`

interface IBuyButtonProps {
    readonly backgroundColor: string;
    readonly color: string;
}

export const BuyButton = styled.button<IBuyButtonProps>`
background:${props => props.backgroundColor};
width:100% ;
height:48px ;
border-radius:10px;
filter:saturate(1);
&:hover{
    filter:saturate(1.8);
}
color:${props => props.color};
font-size:18px;
font-weight:bold;
`

export const AddInfoContent = styled.div`
width:100% ;
min-height:100px;

margin-top:25px;
`
export const InfoContent = styled.div`
width:100% ;
min-height:30px;
margin-top:15px;
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
div{
    margin-left:5px;
    width:90% ;
    display: flex;
    align-items: center;
    color:${colors().gray6};
    font-weight:bold;
    font-style:italic;
    font-size:13px;
    filter:saturate(2);
}
`