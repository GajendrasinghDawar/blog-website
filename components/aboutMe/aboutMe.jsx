import React from 'react'

import { Heading, Text, VStack, Container, useColorModeValue, Box, Highlight } from '@chakra-ui/react'



export default function AboutMe({ children }) {

    return (
        <Container
            width={'full'}
            height='full'
            textAlign='center'
            centerContent
            maxW='container.lg'
            pt={['7rem', '5rem', '7rem']}
        >
            <Heading
                variant={'myHeading'}

            >Welcome !</Heading>
            <Text>Hello! my name is
            </Text>
            <Heading as='h1'
                variant={'myHeading'}
                minH='2.6rem'
            >
                Gajendrasingh Dawar.</Heading>
            <Text>
                <Highlight
                    query={['Python', 'JavaScript',]}
                    styles={{ p: '2px', rounded: 'full', bg: '#fecc1b' }}
                >
                    I'm a Web Developer. I am Starting my Development Journey with Python and JavaScript, also aim to be a Technical Writer.
                </Highlight></Text>
            <Text >I didn't graduate in CS or IT. However, I'm working consistently to understand Computer science.
            </Text>

            <Text >
                <Highlight
                    query={['ReactJs', 'Django',]}
                    styles={{ p: '2px', m: '2px', rounded: 'full', bg: ['#3992ff', '#f44250'] }}
                >
                    I have a decent knowledge of ReactJs and its supporting libraries. At Present, I'm enhancing backend development with Django to build APIs using Django. Additionally, acquiring skills to work in a cloud environment(currently leveraging AWS free tier).
                </Highlight>

            </Text>
            <Text>I'm Seeking for a work in backend development in Django or frontend development in ReactJs.</Text>

        </Container>
    )
}
