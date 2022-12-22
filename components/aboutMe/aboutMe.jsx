import React from 'react'
import { Heading, Text, Container, } from '@chakra-ui/react'

export default function AboutMe({ children }) {
    return (
        <Container
            width={'full'}
            height='full'
            textAlign='center'
            justifyContent={'center'}
            centerContent
            maxW='container.lg'
        >
            <Heading
                variant={'myHeading'}
            >
                Welcome !
            </Heading>
            <Text>
                My name is
            </Text>
            <Heading
                as='h1'
                variant={'myHeading'}
                minH='2.6rem'
            >
                Gajendrasingh Dawar.</Heading>
            <Text
                mt={'1em'}
            >
                {`I'm a self-taught (एकलव्य) Web Developer.`}
            </Text>
            <Text>
                {`Currently, I'm enhancing my skills with these tools(Django, NextJs, React, ...). Additionally, acquiring skills to work in a cloud environment(AWS).`}
            </Text>
            <Text>
                {`Apart from this, I'm a calm book reader. I love to read novels and Shayari.`}
            </Text>
        </Container>
    )
}
