import { List, ListItem, Text, VStack, Flex, Box, Hide, Show, Heading, } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react'
import { Tooltip, IconButton, Button, useDisclosure } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { VscBook, VscDebugDisconnect, VscSourceControl, } from "react-icons/vsc";
import { SlHome } from "react-icons/sl";
import { default as NextLink } from "next/link"
import { useRef } from 'react';
import { VscListSelection } from "react-icons/vsc";
import SideBarDrawer from './drawer';

export const sideBarIcon = [
  {
    icon: <SlHome />
    , path: '/',
    name: 'Home',
    color: 'fill.fillGreen'
  },
  {
    icon: < VscSourceControl />
    , path: 'projects',
    name: 'projects',
    color: 'fill.fillRed'
  },
  {
    icon: <VscBook />
    , path: 'blogs'
    , name: 'blogs',
    color: 'fill.fillPink'
  },
  {
    icon: <VscDebugDisconnect />
    , path: 'links',
    name: 'links',
    color: ' fill.fillYellow'
  }
]



const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <VStack
        width={{ base: '10%', md: '10%', lg: '10%' }}
        height="full"
        borderRightWidth={'1px'}
        flexShrink={0}
        transition={'ease-in-out .2s'}
        // display='none'
        spacing={0}
        display={["none", 'none', "inherit", "inherit"]}
      >
        <VStack
          justifyContent={'space-evenly'}
          height="full"
          width='full'
          alignItems={'center'}
          textAlign='center'
          padding={'1rem'}
        >

          {sideBarIcon.map((element, index) => {
            return (
              <Link as={NextLink} href={element.path} key={index}>
                <IconButton
                  color={element.color}
                  icon={element.icon} aria-label="Dashboard" variant='iconButton'
                />

                <Hide below='md'>
                  <Text fontWeight='bold' >{element.name}</Text>
                </Hide>
              </Link>
            )
          })}

        </VStack>
      </VStack>
      < SideBarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} btnRef={btnRef} />
      <IconButton
        display={["inherit", "inherit", "none", 'none',]}
        icon={<VscListSelection />}
        position={"absolute"}
        right={8}
        bottom={5}
        ref={btnRef}
        variant='menuButton'

        onClick={onOpen}
      />

    </>
  );
};

export default Sidebar

