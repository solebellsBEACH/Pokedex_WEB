import styled from 'styled-components'
import Image from 'next/image'
import { colors } from '../../helpers';

export const Container = styled.nav`
    width:100%;
    display:flex;
    margin-bottom:30px ;
    flex-direction:row;
    align-items:center;
    padding: 0px 40px;
    background: ${colors().background};
    justify-content:space-between;
    border-bottom:1px ${colors().gray1} solid;

`
export const Content = styled.div`
    width:80% ;
    margin-left:20%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
`;

export const ContentImage = styled.div`
    width:120px;
    display:flex;
    margin:5px 0;
    @media (max-width:660px){
        justify-content:center;
        align-items:center;
        width:100%;
    }
    padding:2px ;
`;

export const ImageLogoPokemon = styled(Image)`
`;

export const CarrinhoButton = styled.button`
     margin:0 0 0 2vw;   
    width: 40px;
    height: 40px;
    border-radius:5px;
    display: flex;
    align-items:center;
    justify-content:center;
    color:${colors().gray7};
    &:hover{
        color:${colors().gray6};
    }
`

export const FavoriteButton = styled.button`
    color:${colors().gray7};
    &:hover{
        color:${colors().gray6};
    }
    margin:0 0 0 2vw;
`
