import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"


interface ILoginModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void
}

export function LoginModal({ isOpen, onOpen, onClose }: ILoginModal) {

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
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
                        onClick={() => { }}>Criar usuário</Button>
                        <Button
                        colorScheme='red'
                        onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}