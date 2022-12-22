import { useRef } from 'react';

import { ChakraProvider, IconButton, useDisclosure, VStack } from '@chakra-ui/react'
import { VscListSelection, } from "react-icons/vsc";

import "@fontsource/hina-mincho"
import "@fontsource/frijole"

import { NavBar } from './navbar'
import { Content } from './content'
import theme from './theme'
import SideBarDrawer from './sidebar/drawer'

export default function RootLayout({ children }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <ChakraProvider theme={theme}>
            <VStack
                height={'100vh'}
                width={'full'}
                overflow='hidden'
                spacing={0}
                fontSize={{ base: '1.0em', sm: '1.2em', md: '1.2em', lg: '1.2em' }}
            >
                <NavBar />
                <Content> {children} </Content>

                < SideBarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
                <IconButton
                    display={["inherit", "inherit", "none", 'none',]}
                    icon={<VscListSelection />}
                    position={"absolute"}
                    right={2}
                    bottom={2}
                    ref={btnRef}
                    variant='menuButton'
                    onClick={onOpen}
                    zIndex={1}
                />
            </VStack>
        </ChakraProvider>
    )
}
