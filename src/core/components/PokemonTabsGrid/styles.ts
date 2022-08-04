import styled from 'styled-components'
import { colors } from '../../helpers'

export const Container = styled.div`
width:95% ;

margin:5vh 2.5%;
background-color:${colors().background};

display:flex;
/* justify-content:center; */
align-items:center;
padding:3vh 30px ;
border-radius:15px;
flex-direction:column;

`


interface ITabSelectorProps {
    readonly isActive: boolean;
}

export const TabSelectorContainer = styled.button<ITabSelectorProps>`
width:100px;
height:40px;

justify-content:center;
align-items:center;
border-bottom-width:${(props) => props.isActive ? 3 : 0}px;
border-bottom-color:${({ theme }) => colors().blue3};
`
export const TabSelectorText = styled.h1<ITabSelectorProps>`
font-weight: ${(props) => props.isActive ? 'bold' : 'normal'};
font-size:16px;
color:${(props) => props.isActive ? colors().gray6 : colors().gray4};
`

export const ContentBottom = styled.div`
/* width:100% ;
height:60%;
padding:25px 15px ; */
`

export const InformationItemContainer = styled.div`
height:35px;
width:100%;
margin-bottom:10px;
flex-direction:row;
`
export const Label = styled.h1`
width:120px ;
margin-right: 10px;
font-size: 16px;
font-family: nunito;
color: ${colors().gray3};
`
export const Value = styled.h1`
font-size: 15px;
width:60% ;
font-family: nunito;
color: ${colors().gray6};
`
export const ContentTop  = styled.div`
width:100% ;
min-height: 47px;
flex-direction:row;
justify-content:space-between;
margin-bottom:0px;
`;
// export const StatusTabFlatList = styled.FlatList`
// width:100% ;
// height:100% ;
// `
