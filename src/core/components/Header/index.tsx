import React from 'react'
import { Container, Content, ContentRight, ContentLeft, ContentImage } from './styles'
import {LogoPokemon} from '../../../assets';
export const Header = () => {
    return (
        <Container>
            <Content>
                <ContentLeft>
                    <ContentImage/>
                {/* <img src={LogoPokemon} alt="React Logo" /> */}
                </ContentLeft>
                <ContentRight>
                </ContentRight>
            </Content>
        </Container>
    )
}