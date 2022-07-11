import React from 'react'

import { Container, Content, ContentRight, ContentLeft, ContentImage, ImageLogoPokemon } from './styles'
import { LogoPokemon } from '../../../assets';
import { SearchPokemonInput} from '../../components';

export const Header = () => {
    return (
        <Container>
            
            <Content>
                <ContentLeft>
                    <ContentImage><ImageLogoPokemon height='80%' src={LogoPokemon} /></ContentImage>
                </ContentLeft>
                <ContentRight>
                <SearchPokemonInput/>
                    {/* <SimpleGrid  columns={[2, 4]} spacing='40px'
                    >
                        <Button w='75px' h='25px' colorScheme='teal' variant='ghost' size='md'>
                            Button
                        </Button>
                        <Button w='75px' h='25px' colorScheme='teal' variant='ghost' size='md'>
                            Button
                        </Button>
                        <Button w='75px' h='25px' colorScheme='teal' variant='ghost' size='md'>
                            Button
                        </Button>
                        <Button w='75px' h='25px' colorScheme='teal' variant='ghost' size='md'>
                            Button
                        </Button>
                    </SimpleGrid> */}
                </ContentRight>
            </Content>
        </Container>
    )
}