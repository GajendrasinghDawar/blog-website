import { VStack } from '@chakra-ui/react'
import { ChakraProvider, } from '@chakra-ui/react'

import "@fontsource/hina-mincho"

import "@fontsource/frijole"

import { NavBar } from './navbar'
import { Content } from './content'
import theme from './theme'

export default function RootLayout({ children }) {

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
            </VStack>
        </ChakraProvider>
    )
}
