import { Heading, Container, } from '@chakra-ui/react'

export default function Custom404() {
    return <Container
        width={'full'}
        height='full'
        textAlign='center'
        centerContent
        maxW='container.lg'
        pt={['7rem', '10rem', '7rem']}
    >

        <Heading as='h1'
            color={'fill.fillRed'}
            fontSize={{ base: '2rem', sm: '2rem', md: '7rem', lg: '7rem' }}
        >
            Not Found</Heading>

    </Container>
}