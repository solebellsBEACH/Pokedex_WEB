import { useRouter } from 'next/router'
import { Header } from '../../pageComplements/pokemonScreen/components'
import { Container } from '../../pageComplements/pokemonScreen/styles'

const Pokemon = () => {
    const router = useRouter()
    const { id } = router.query

    return <Container>
        <Header/>
        PokemonScreen
    </Container>
}

export default Pokemon