import React from 'react'

import { Heading, Text, VStack } from '@chakra-ui/react'



export default function AboutMe({ children }) {
    console.log('twice')
    return (
        <VStack
            width={'full'}
            height='full'
            alignItems='center'
            justifyContent={'space-evenly'}
            textAlign='center'
            spacing={0}
            padding='1rem'
            fontWeight={'bold'}
        >
            <Heading
                variant={'myHeading'}
            >Welcome !</Heading>
            <Text>Hello! my name is
            </Text>
            <Heading as='h1'
                variant={'myHeading'}
                minH='2.6rem'
            >Gajendrasingh Dawar.</Heading>
            <Text>Im a Web Developer. I am Starting my Development Journey with Python and JavaScript, also aim to be a Technical Writer.</Text>
            <Text >I didnt graduate in CS or IT. However, Im working consistently to understand Computer science.
            </Text>
            <Text >I have a decent knowledge of ReactJs and its supporting libraries. At Present, Im enhancing backend development with Django to build APIs using Django. Additionally, acquiring skills to work in a cloud environment(currently leveraging AWS free tier).
            </Text>
            <Text>I&aposm Seeking for a work in backend development in Django or frontend development in ReactJs.</Text>
        </VStack>
    )
}
