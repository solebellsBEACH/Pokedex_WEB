import { useRouter } from 'next/router'
import { Header } from '../../core/components';
import { ProductContainer } from '../../pageComplements/pokemonScreen/components'
import { Container, Content } from '../../pageComplements/pokemonScreen/styles'

const Pokemon = () => {
    const router = useRouter();
    const { id } = router.query
    return <Container>
        <Header />  
        {typeof id == 'string' ? <ProductContainer id={id} /> : <></>}
    </Container>
}

export default Pokemon