import { SearchIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, StyledInput } from './style'
import { Creators as HomeActions } from '../../../store/ducks/home'

interface ISearchPokemonInput {
    inputState: string
    setInputState: React.Dispatch<React.SetStateAction<string>>
}

export const SearchPokemonInput = ({ inputState, setInputState }: ISearchPokemonInput) => {

    const dispatch = useDispatch()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(HomeActions.HomePokemonsRequest({
            offset: 0,
            limit: 20,
            name:inputState.toLocaleLowerCase()
        }))
    }

    return (
        <Container
            onSubmit={e => handleSubmit(e)}
        >
            <StyledInput
                placeholder='Buscar Pokémon'
                value={inputState}
                onChange={e => setInputState(e.target.value)}
            >

            </StyledInput>
            {inputState.length > 0 ? <Button
                type="submit"
                right='50px'
                position='relative'
                onClick={() => { }}
                width='10px'
                height='30px'
                borderRadius='20px'
                colorScheme='blue'
                variant='solid'>
                <SearchIcon w={10} />
            </Button> : <></>}
        </Container>
    )
}