import { VStack } from '@chakra-ui/react'
import { ChakraProvider, } from '@chakra-ui/react'

import { NavBar } from './navbar'
import { Content } from './content'
import theme from './theme'

export default function RootLayout({ children }) {

    console.log(theme)
    return (
        <ChakraProvider theme={theme}>
            <VStack
                height={'100vh'}
                width={'full'}
                overflow='hidden'
                spacing={0}
            >
                <NavBar />
                <Content> {children} </Content>
            </VStack>
        </ChakraProvider>
    )
}
