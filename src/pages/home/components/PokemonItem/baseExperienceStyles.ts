import styled from 'styled-components'
import { colors } from '../../../../core/helpers'

export const BaseExperienceContainer = styled.div`
    height: auto;
    /* background-color:${colors().gray2}; */
    width:75%;
    margin-left:10%;
    margin-bottom:5px;
    display:flex;
    padding:0px 10px;
    justify-content:space-between;
    align-items:center;
    filter: saturate(10);
`
export const BaseExperiencePokemonName = styled.h1`
    font-size:16px;
    color:${colors().gray6};
    font-weight:bold;
`;

interface IBaseExperienceLabelProps {
    readonly color: string;
}

export const BaseExperienceLabel = styled.h1<IBaseExperienceLabelProps>`
font-size:18px;
color:${(props) => props.color} ;
font-weight:bold;
margin-bottom:3px;
`;