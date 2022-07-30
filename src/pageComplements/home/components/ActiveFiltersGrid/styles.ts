import { Wrap } from '@chakra-ui/react'
import styled from 'styled-components'
import { colors } from '../../../../core/helpers'
export const Container = styled.div`
width:95% ;
margin:5vh 2.5% 2vh 2.5%;
background-color:${colors().gray1};
display:flex;
justify-content:center;
align-items:center;
padding:3vh 0 ;
border-radius:15px;
`
export const Grid = styled(Wrap)`
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
