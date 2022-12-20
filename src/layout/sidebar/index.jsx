import { useRef } from 'react';
import { Text, VStack, Hide, IconButton, useDisclosure } from '@chakra-ui/react';

import { Link } from '@chakra-ui/react'
import { default as NextLink } from "next/link"
import { useRouter } from 'next/router'

import { VscBook, VscDebugDisconnect, VscSourceControl, VscListSelection } from "react-icons/vsc";
import { SlHome } from "react-icons/sl";

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
    , path: '/projects',
    name: 'projects',
    color: 'fill.fillRed'
  },
  {
    icon: <VscBook />
    , path: '/blogs'
    , name: 'blogs',
    color: 'fill.fillPink'
  },
  {
    icon: <VscDebugDisconnect />
    , path: '/find-me',
    name: 'findMe',
    color: ' fill.fillYellow'
  }
]

const Sidebar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <VStack
        width={{ base: '10%', md: '10%', lg: '10%' }}
        height="90%"
        borderWidth={'1px'}
        ml={4}
        borderRadius={4}
        flexShrink={0}
        transition={'ease-in-out .2s'}
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
              <Link
                as={NextLink}
                href={element.path}
                key={index + 1}
                color={currentRoute === element.path ? 'fill.fillBlue' : ''}
                textDecoration={currentRoute === element.path ? '2px solid underline' : ''}
              >
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

