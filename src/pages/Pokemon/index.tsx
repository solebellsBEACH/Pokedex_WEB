import { useRouter } from 'next/router'
import { Header, ProductContainer } from '../../pageComplements/pokemonScreen/components'
import { Container, Content } from '../../pageComplements/pokemonScreen/styles'

const Pokemon = () => {
    const id = 15;
    return <Container>
        <Header/>
            <ProductContainer id={id}/>
    </Container>
}

export default Pokemon