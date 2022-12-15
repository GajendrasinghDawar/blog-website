import { List, ListItem, Text, VStack, Flex, Box, Hide, Show, Heading, } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react'
import { Tooltip, IconButton } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
import { VscBook, VscDebugDisconnect, VscSourceControl, } from "react-icons/vsc";
import { SlHome } from "react-icons/sl";

import { default as NextLink } from "next/link"
const sideBarIcon = [
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
  // const point = useBreakpointValue({
  //   base: false,
  //   md: true
  // })
  // const displayPoint = useBreakpointValue({
  //   base: '440px',
  //   md: '40em'
  // })

  return (
    <VStack
      width={{ base: '10%', md: '10%', lg: '10%' }}
      height="full"
      // borderRightColor="site.whiteBoderLineColor"
      // borderRightColor="#c8c8c8"
      borderRightWidth={'1px'}
      flexShrink={0}
      transition={'ease-in-out .2s'}
    // display='none'
    >
      <VStack
        justifyContent={'space-evenly'}
        height="full"
        width='full'
        alignItems={'center'}
        textAlign='center'
        padding={'1rem'}>

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
    </VStack>);
};

export default Sidebar

