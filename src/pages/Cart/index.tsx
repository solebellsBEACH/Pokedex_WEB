import { SimpleGrid, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../../core/components'
import { CartItem } from '../../pageComplements/cart/components'
import { Container, Content } from '../../pageComplements/cart/styles'
import { Creators as HomeActions } from '../../core/store/ducks/home'
import { useSelector } from 'react-redux'
import { IHomeDuckInitialState } from '../../core/interfaces'
import { useRouter } from 'next/router'

const Cart = (props: any) => {
    const dispatch = useDispatch();
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const toast = useToast();
    const router = useRouter();
    useEffect(() => {
        if (homeData.userData == null) {
            router.push('/')
            toast({
                position: 'top',
                title: 'Ops, algo deu errado',
                description: 'Você precisa estar logado para acessar o carrinho!!',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        }
        dispatch(HomeActions.getUserCartRequest())
    }, [])


    return (
        <Container>
            <title>Carrinho</title>
            <Header />
            <Content>
                <SimpleGrid columns={1} spacing={10}>
                    {homeData?.userCartData?.data == null || homeData?.userCartData?.data.length == 0 ? <Text marginTop='20%' fontSize='4xl'>Não há nenhum pokemon em seu carrinho</Text> :
                        <>
                            {homeData?.userCartData?.data.map((item, index) => <CartItem key={index + 'CART-ITEM'} pokemon={item} />)}
                        </>
                    }
                </SimpleGrid>
            </Content>
        </Container>
    )
}

export default Cart