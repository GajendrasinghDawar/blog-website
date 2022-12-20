import { Heading, Container, } from '@chakra-ui/react'


export default function Blogs() {
    return (
        <Container
            width={'full'}
            height='full'
            textAlign='center'
            centerContent
            maxW='container.lg'
            pt={['7rem', '10rem', '7rem']}
        >

            <Heading as='h1'
                color={'fill.fillRed'}
                fontSize={['7rem', '2rem', '7rem']}
            >
                Work Not Done Yet !</Heading>

        </Container>
    )
}
