import {  Wrap } from '@chakra-ui/react'
import styled from 'styled-components'
import { colors } from '../../../../core/helpers'
export const Container = styled.div`
width:95% ;
margin:5vh 2.5%;
background-color:${colors().background};
display:flex;
justify-content:center;
align-items:center;
padding:3vh 0 ;
border-radius:15px;
`
export const Grid = styled(Wrap)`
`