import { Wrap } from '@chakra-ui/react'
import styled from 'styled-components'
import { colors } from '../../../../core/helpers'
import { MdOutlineClear } from 'react-icons/md'

export const Container = styled.div`
width:55% ;
min-width:30px;
margin:5vh 2.5% 2vh 2.5%;
background-color:${colors().background};
display:flex;
/* justify-content:center;
align-items:center; */
flex-direction:column;
padding:3vh 20px ;
border-radius:15px;
`
export const Grid = styled(Wrap)`
background: red;
`

export const FilterButton = styled.button`
width:105px;
min-height:50px;
margin:6px;
border-radius:4px;
display: flex;
align-items:center;
justify-content:center;
background:${colors().blue1} ;
`

export const TextButton = styled.h1`
font-size:19px;
color:${colors().white} ;
`

export const Title = styled.h1`
font-size:25px;
font-weight:bold;
color:${colors().blue1};

`


export const ContentTop = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:10px;
`

export const StyledMdOutlineClear = styled(MdOutlineClear)`
color:${colors().blue1};
&:hover{
    color:${colors().gray7};
}
`