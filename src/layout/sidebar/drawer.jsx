import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    useMultiStyleConfig,
    Text, Link,
    IconButton, VStack,
    Hide,
    HStack,
    Flex
} from '@chakra-ui/react'
import { default as NextLink } from "next/link"



import React from 'react'
import { sideBarIcon } from '.'

export default function SideBarDrawer({ isOpen, onOpen, onClose, btnRef }) {

    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            variant={'myvariant'}
        >
            <DrawerOverlay />
            <DrawerContent>

                <DrawerHeader>
                    <Text
                    // fontWeight={700}
                    bgClip="text"
                    //         fontSize={25}
                    bgGradient='linear-gradient(
  90deg,
  hsl(148deg 100% 50%) 0%,
  hsl(148deg 95% 48%) 3%,
  hsl(148deg 91% 46%) 7%,
  hsl(148deg 86% 44%) 12%,
  hsl(148deg 81% 41%) 18%,
  hsl(148deg 76% 39%) 26%,
  hsl(148deg 71% 37%) 35%,
  hsl(148deg 67% 35%) 45%,
  hsl(148deg 61% 33%) 56%,
  hsl(148deg 57% 30%) 66%,
  hsl(148deg 52% 28%) 74%,
  hsl(148deg 47% 26%) 81%,
  hsl(149deg 43% 24%) 85%,
  hsl(147deg 38% 22%) 89%,
  hsl(147deg 33% 19%) 92%,
  hsl(149deg 29% 17%) 94%,
  hsl(147deg 24% 15%) 96%,
  hsl(150deg 19% 13%) 98%,
  hsl(143deg 15% 11%) 99%,
  hsl(150deg 10% 8%) 99%,
  hsl(120deg 3% 6%) 100%,
  hsl(0deg 0% 4%) 100%
)
'>
                    GajendrasinghDawar
                    </Text>
                    <DrawerCloseButton />
                </DrawerHeader>

                <DrawerBody>
                    <VStack
                        justifyContent={'space-around'}
                        height="full"
                        width='full'
                    >

                        {sideBarIcon.map((element, index) => {
                            return (
                                <Flex
                                    width='70%'
                                    alignItems={'center'}
                                    textAlign='center'
                                    justifyContent={'space-between'}
                                    key={index}
                                >
                                    <IconButton
                                        color={element.color}
                                        icon={element.icon} aria-label="Dashboard" variant='iconButton'
                                    />
                                    <Link
                                        as={NextLink}
                                        href={element.path}
                                        key={index}
                                    >
                                        <Text fontWeight='bold' >
                                            {element.name}
                                        </Text>
                                    </Link>
                                </Flex>
                            )
                        })}

                    </VStack>
                </DrawerBody>

            </DrawerContent>
        </Drawer>
    )
}
