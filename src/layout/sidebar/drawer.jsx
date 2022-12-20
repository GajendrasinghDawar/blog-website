import {
    Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Text, IconButton, VStack, Flex
} from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'
import { default as NextLink } from "next/link"
import { useRouter } from 'next/router'

import { sideBarIcon } from '.'

export default function SideBarDrawer({ isOpen, onOpen, onClose, btnRef }) {

    const router = useRouter();
    const currentRoute = router.pathname;

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
                    <Link
                        as={NextLink}
                        href={'/'}
                        variant='custom'
                    >
                        GajendrasinghDawar
                    </Link>
                    <DrawerCloseButton />
                </DrawerHeader>

                <DrawerBody>
                    <VStack
                        justifyContent={'space-around'}
                        height="full"
                        width='full'
                    >
                        {sideBarIcon.map(
                            (element, index) => {
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
                                        color={currentRoute === element.path ? 'fill.fillBlue' : ''}
                                        textDecoration={currentRoute === element.path ? '2px solid underline' : ''}
                                    >
                                        <Text fontWeight='bold' >
                                            {element.name}
                                        </Text>
                                    </Link>
                                </Flex>
                            )
                            }
                        )
                        }
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
