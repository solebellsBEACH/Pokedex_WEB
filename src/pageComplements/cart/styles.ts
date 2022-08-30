import styled from 'styled-components'
import { colors } from '../../core/helpers';
 
export const Container  = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
export const Content = styled.div`
margin-bottom:150px;
width:1200px;
min-height:500px;
background-color:${colors().background};
display: flex;
flex-direction: column;
align-items: center;

padding:10px 10px 20px 10px;
border:1px ${colors().gray1} solid;
border-radius:10px;

@media (max-width:1250px){
    width: 1000px;
};

@media (max-width:1070px){
    width: 800px;
};

@media (max-width:830px){
    width: 600px;
};

@media (max-width:630px){
    width: 400px;
};


/* @media(max-width:1250px){
    flex-direction: row;
    width:auto;
    justify-content: center;
    align-items: center;
} */
`;