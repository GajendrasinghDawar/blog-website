import { SimpleGrid, Box, Flex, Wrap, WrapItem, Center, Card, CardBody, CardHeader, Heading, CardFooter, Text, Button } from '@chakra-ui/react'
import React from 'react'

const projects = [
    {
        name: 'contacts book',
        url: 'contacts-book'
    },
    {
        name: 'old portfolio',
        url: 'old-portfolio'
    },
    {
        name: 'tiny apps django',
        url: 'tiny-apps-django'
    },
    {
        name: 'api.fakejson.tk',
        url: 'api-fakejson-tk'
    },
    {
        name: 'e-learning website ',
        url: 'e-learning-website'
    },
]

export default function MyProject() {
    return (
        <Wrap
            // px={'2rem'}
            my='2rem'
            width='full'
            textAlign={'center'}
            overflowY='auto'
            spacing='30px'
            height={'full'}
            align='center'
            justify='center'

        >
            <WrapItem
            >

                <Card>
                    <CardHeader>
                        <Heading size='md' color={'text.textColorYellow'}> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text position={'relative'}>Icon</Text>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
            </WrapItem>

        </Wrap>

    )
}
