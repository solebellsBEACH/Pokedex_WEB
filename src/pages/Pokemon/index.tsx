import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring';
import { Header, ProductContainer } from '../../pageComplements/pokemonScreen/components'
import { Container, Content } from '../../pageComplements/pokemonScreen/styles'

const Pokemon = () => {
    const router = useRouter();
    const { id } = router.query
    return <Container>
        <Header />
        {typeof id == 'string' ? <ProductContainer id={parseInt(id)} /> : <></>}
    </Container>
}

export default Pokemon