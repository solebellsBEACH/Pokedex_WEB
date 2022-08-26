import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../../core/components'
import { CartItem } from '../../pageComplements/cart/components'
import { Container, Content } from '../../pageComplements/cart/styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { useSelector } from 'react-redux'
import { IHomeDuckInitialState } from '../../core/interfaces'

const Cart = (props: any) => {

    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    useEffect(() => {
        //dispatch(HomeActions.getUserCartRequest())
    }, [props])

    console.log(homeData.userCartData)

    return (
        <Container>
            <Header />
            <Content>
                <SimpleGrid columns={1} spacing={10}>

                    {/* <CartItem /> */}
                </SimpleGrid>
            </Content>
        </Container>
    )
}

export default Cart