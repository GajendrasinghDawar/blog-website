import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../sidebar'


export const Content = ({ children }) => {
  return (
    <HStack
      width="full"
      height="full"
      flex={1}
      overflow="hidden"
      spacing={0}
      transition={'ease-in-out .4s'}
    >
      <SideBar />
      <VStack
        width="full"
        height="full"
        spacing={0}
        overflowY="auto"
      >
        {children}

      </VStack>
    </HStack>
  )
}

