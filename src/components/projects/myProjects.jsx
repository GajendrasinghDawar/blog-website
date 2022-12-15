import { SimpleGrid, Box, Flex, Wrap, WrapItem, Center, Card, CardBody, CardHeader, Heading, CardFooter, Text, Button } from '@chakra-ui/react'
import React from 'react'

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
            <WrapItem
            >

                <Card>
                    <CardHeader>
                        <Heading size='md' color={'text.textColorPink'}> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
            </WrapItem>
            <WrapItem
            >

                <Card>
                    <CardHeader>
                        <Heading size='md' color={'text.textColorGreen'}> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
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
