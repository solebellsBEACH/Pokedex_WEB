import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"


interface IRegisterModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void
}

export function RegisterModal({ isOpen, onOpen, onClose }: IRegisterModal) {

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [isCreateUser, setIsCreateUser] = useState(false)

    function LoginModal() {
        return <ModalContent>
            <ModalHeader>Faça seu login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef} placeholder='Email' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Senha</FormLabel>
                    <Input placeholder='Senha' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
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
        return <ModalContent>
            <ModalHeader>Crie seu usuário</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input ref={initialRef} placeholder='Username' />
                </FormControl>
                <FormControl
                mt={4}
                >
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef} placeholder='Email' />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Senha</FormLabel>
                    <Input placeholder='Senha' />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
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