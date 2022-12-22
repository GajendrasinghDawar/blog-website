import { Text, VStack, Hide, IconButton, useDisclosure } from '@chakra-ui/react';

import { Link } from '@chakra-ui/react'
import { default as NextLink } from "next/link"
import { useRouter } from 'next/router'

import { VscBook, VscDebugDisconnect, VscSourceControl, } from "react-icons/vsc";
import { SlHome } from "react-icons/sl";


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

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <VStack
        as='aside'
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
          as='nav'
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
    </>
  );
};

export default Sidebar

