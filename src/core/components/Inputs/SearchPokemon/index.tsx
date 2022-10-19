import { SearchIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { Container, StyledInput } from './style'

interface ISearchPokemonInput {
    inputState: string
    setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const SearchPokemonInput = ({ inputState, setInputState }: ISearchPokemonInput) => {
    return (
        <Container>
            <StyledInput
            placeholder='Buscar Pokémon'
            value={inputState}
            onChange={e => setInputState(e.target.value)}
        >
            
        </StyledInput>
{inputState.length>0?        <Button
        right='50px'
        position='relative'
        onClick={() => { }}
        width='10px'
        height='30px'
        borderRadius='20px'
        colorScheme='blue'
        variant='solid'>
            <SearchIcon w={10}  />
    </Button>:<></>}
        </Container>
    )
}