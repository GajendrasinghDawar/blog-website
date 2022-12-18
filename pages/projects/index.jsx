import { SimpleGrid, Box, Flex, Wrap, WrapItem, Center, Card, CardBody, CardHeader, Heading, CardFooter, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const projects = [
    {
        name: 'contacts book',
        url: 'contacts-book',
        summary: 'View a summary of all your customers over the last month.',
        color: 'text.textColorYellow'
    },
    {
        name: 'old portfolio',
        url: 'old-portfolio',
        summary: 'View a summary of all your customers over the last month.',
        color: 'text.textColorPink'
    },
    {
        name: 'tiny apps django',
        url: 'tiny-apps-django',
        summary: 'View a summary of all your customers over the last month.',
        color: 'text.textColorGreen'
    },
    {
        name: 'api.fakejson.tk',
        url: 'api-fakejson',
        summary: 'View a summary of all your customers over the last month.',
        color: 'text.textColorRed'
    },
    {
        name: 'e-learning website ',
        url: 'e-learning-website',
        summary: 'View a summary of all your customers over the last month.',
        color: 'fill.fillBlue'
    },
]

export default function index() {
    return (
        <Wrap
            // px={'2rem'}

            width='full'
            textAlign={'center'}
            overflowY='auto'
            spacing={0}
            height={'full'}
            align='center'
            justify='center'

        >

            {projects.map((project) => {
                return (
                    <WrapItem
                        key={index}

                    >

                        <Card
                            maxW={350}
                            m='1rem'
                        >
                            <CardHeader>
                                <Heading size='md' color={project.color}>
                                    {project.name}
                                </Heading>
                            </CardHeader>
                            <CardBody>

                                <Text>{project.summary}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button>
                                    <Link href={`projects/${project.url}`}>see detail</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </WrapItem>

                )
            })}

        </Wrap>
    )
}
