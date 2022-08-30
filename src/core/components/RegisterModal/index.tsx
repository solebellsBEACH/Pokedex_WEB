import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { insertToken } from "../../hooks";
import { IHomeDuckInitialState } from "../../interfaces";
import { Creators as HomeActions } from '../../store/ducks/home'


interface IRegisterModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void
}

export function RegisterModal({ isOpen, onOpen, onClose }: IRegisterModal) {

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [isCreateUser, setIsCreateUser] = useState(false)

    const homeData = useSelector((state: { home: IHomeDuckInitialState }) => state.home)
    const dispatch = useDispatch()
    const toast = useToast()
    

    function LoginModal() {
        const [userData, setUserData] = useState<{
            email: string,
            password: string,
        }>({
            email: '',
            password: '',
        })

        const handleSubmit = () => {
            dispatch(HomeActions.loginRequest(userData))
            
            if (homeData.userLoginError) {
                toast({
                    position: 'top',
                    title: 'Ops, algo deu errado',
                    description: homeData.userLoginData?.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            } else {
                toast({
                    position: 'top',
                    title: 'Tudo Top !!',
                    description: 'Login efetuado com sucesso',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })

                
                onClose()
            }
        }

        return <ModalContent>
            <ModalHeader>Faça seu login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef}
                        placeholder='Email'
                        onChange={e => { setUserData({ ...userData, email: e.target.value }) }}
                        value={userData.email}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Senha</FormLabel>
                    <Input placeholder='Senha'
                        type='password'
                        onChange={e => { setUserData({ ...userData, password: e.target.value }) }}
                        value={userData.password}
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button
                    disabled={userData.email.length < 3 || userData.password.length < 3}
                    colorScheme='blue'
                    onClick={handleSubmit}
                    mr={3}>
                    Logar
                </Button>
                <Button
                    mr={3}
                    onClick={() => {
                        setIsCreateUser(true)
                    }}>Criar usuário</Button>
                <Button
                    colorScheme='red'
                    onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    }
    function CreateUserModal() {

        const [userData, setUserData] = useState<{
            email: string,
            name: string,
            password: string,
        }>({
            email: '',
            name: '',
            password: '',
        })

        const handleSubmit = () => {
            dispatch(HomeActions.createUserRequest(userData))
            if (homeData.createUserError) {
                toast({
                    position: 'top',
                    title: 'Ops, algo deu errado',
                    description: homeData.createUserData?.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            } else {
                toast({
                    position: 'top',
                    title: 'Tudo Top !!',
                    description: 'Registro efetuado com sucesso',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                const token = homeData.createUserData?.token
                if (token !== undefined) insertToken(token)
                onClose()
            }
        }

        return <ModalContent>
            <ModalHeader>Crie seu usuário</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input ref={initialRef} placeholder='Username'
                        onChange={e => { setUserData({ ...userData, name: e.target.value }) }}
                        value={userData.name}
                    />
                </FormControl>
                <FormControl
                    mt={4}
                >
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef}
                        placeholder='Email'
                        onChange={e => { setUserData({ ...userData, email: e.target.value }) }}
                        value={userData.email}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Senha</FormLabel>
                    <Input placeholder='Senha'
                        type='password'
                        onChange={e => { setUserData({ ...userData, password: e.target.value }) }}
                        value={userData.password}
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button
                    disabled={userData.email.length < 3 || userData.password.length < 3 || userData.name.length < 3}
                    onClick={handleSubmit}
                    colorScheme='blue' mr={3}>
                    Criar Usuário
                </Button>
                <Button
                    mr={3}
                    onClick={() => {
                        setIsCreateUser(false)
                    }}>Fazer login</Button>
                <Button
                    colorScheme='red'
                    onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                {isCreateUser ? <CreateUserModal /> : <LoginModal />}
            </Modal>
        </>
    )
}