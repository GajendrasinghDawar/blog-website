import {
  HStack,
  Text,
  useColorMode,
  IconButton
} from "@chakra-ui/react"

import { IoIosMoon } from "react-icons/io";
import { TiAdjustBrightness } from "react-icons/ti";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack
      width="full"
      minH={'64px'}
      borderBottomWidth={1}
      justifyContent='space-between'
      px={'2.5rem'}
    >

      <Text
        fontWeight={'bold'}
      >
        GajendrasinghDawar
      </Text>
      <IconButton
        variant='toggleButton'
        onClick={toggleColorMode}
        aria-label='toggle theme'
        icon={colorMode === 'light' ? <TiAdjustBrightness /> : <IoIosMoon />}
        mx='1rem'
      />
    </HStack>
  );
}