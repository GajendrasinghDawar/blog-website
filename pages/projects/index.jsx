import { Wrap, WrapItem, Center, Card, CardBody, CardHeader, Heading, CardFooter, Text, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'
import { default as NextLink } from "next/link"

import { ExternalLinkIcon } from '@chakra-ui/icons'

const projects = [
    {
        name: 'contacts book',
        url: 'contacts-book',
        summary: `It's contacts book app in react and django.
`, color: 'text.textColorYellow',
        github: 'https://github.com/GajendrasinghDawar/Contacts-Book',
    },
    {
        name: 'old portfolio',
        url: 'old-portfolio',
        summary: `It's my old react portfolio Website.
`,  
        color: 'text.textColorPink',
        github: 'https://github.com/GajendrasinghDawar/old-portfolio'
    },
    {
        name: 'tiny apps django',
        url: 'tiny-apps-django',
        summary: `It's collection of  Django apps .`,
        color: 'text.textColorGreen',
        github: 'https://github.com/GajendrasinghDawar/tiny-apps-django'
    },
    {
        name: 'api.fakejson.tk',
        url: 'api-fakejson',
        summary: `It's django app that serve fake data in json format. 
`,
        color: 'text.textColorRed',
        github: 'https://github.com/GajendrasinghDawar/api.fakejson.tk'
    },
    {
        name: 'e-learning website ',
        url: 'e-learning-website',
        summary: `This simple E-learning Django website.`,
        color: 'fill.fillBlue',
        github: 'https://github.com/GajendrasinghDawar/e-learning_website'
    },
    {
        name: 'this website ',
        url: 'this-website',
        summary: `This portfolio website built using NextJs and ChakraUi.`,
        color: 'text.textColorRed',
        github: 'https://github.com/GajendrasinghDawar/my-website'
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
                                <HStack
                                    width={'full'}
                                    justifyContent={'space-between'}>
                                    <Link
                                        as={NextLink}
                                        href={`projects/${project.url}`}>
                                        see detail
                                    </Link>
                                    <Link
                                        as={NextLink}
                                        href={project.github} isExternal>
                                        github <ExternalLinkIcon mx='2px' />
                                    </Link>
                                </HStack>
                            </CardFooter>
                        </Card>
                    </WrapItem>

                )
            })}

        </Wrap>
    )
}
