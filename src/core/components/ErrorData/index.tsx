import Image from 'next/image'
import React from 'react'
import { Container } from './styles'
import ErrorImage from '../../../assets/errorImage.svg'

export const ErrorData = () => {
    return (
        <Container>
            ErrorData
            <Image src={ErrorImage}/>
        </Container>
    )
}