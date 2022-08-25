import { Tooltip, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import { IHomeDuckInitialState } from '../../interfaces';
import { Container, StyledFaUserCircle } from './styles'

interface ILoginContent {
    handleLoginButton: () => void;
    size?: 'sm' | 'lg'
}

export const LoginContent = ({ handleLoginButton, size }: ILoginContent) => {

    const [isLargerThan] = useMediaQuery(`(min-width: ${size == 'sm' ? 1200 : 700}px)`);
    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)

    const labelLoginButton = (): string => {
        if (homeData.userData !== null) return `Fala ae ${homeData.userData?.data.name}`

        return 'Logar'
    }

    return (
        <Tooltip label='Usar outra conta'>
            <Container
                size={size}
                onClick={handleLoginButton}
            >
                {isLargerThan ? <>{labelLoginButton()}</> : <></>}

                <StyledFaUserCircle size={23} iconSize={size}/>
            </Container>

        </Tooltip>
    )
}