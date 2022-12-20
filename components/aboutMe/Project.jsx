import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import { Heading, Text, Container, } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai";

export default function Project({ tools, projectName,
    projectDetail, }) {
    const Tools = tools
    return (
        <Container
            width={'full'}
            height='full'
            textAlign='justify'
            // centerContent
            maxW='container.lg'
            pt={['2rem', '2rem', '2rem']}
        >
            <Heading
                textAlign={'center'}
                color={'fill.fillBlue'}
                as={'h1'}
                size={['lg', 'lg', 'xl',]}
                my={2}
            >
                {projectName}
            </Heading>
            <Text
                my={2}
            >
                {projectDetail}
            </Text>
            <Heading
                my={2}
                as='h3'
                size={['md', 'sm', 'md']}
                color={'fill.fillGreen'}
                textAlign={'center'}
                letterSpacing='.3rem'
            // color={'text.textColorYellow'}
            >
                Tools I have used in this project
            </Heading>

            {Tools.map((tool, index) => {
                return (
                    <List spacing={3} key={index}>

                        <ListItem
                            my='1rem'
                            color={'fill.fillRed'}>
                            <ListIcon as={AiFillStar} color={'fill.fillRed'}
                            />
                            {tool.name}
                        </ListItem>
                        <Text
                            mx='2rem'
                        >
                            {tool.detail}
                        </Text>
                    </List>

                )
            })}
        </Container >
    )
}
