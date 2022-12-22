import { HStack, useColorMode, IconButton, Text } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { default as NextLink } from "next/link"

import { useState } from "react";

import { IoIosMoon } from "react-icons/io";
import { TiAdjustBrightness } from "react-icons/ti";

import useSound from 'use-sound';


export const NavBar = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const [isChecked, setIsChecked] = useState(
    false
  );

  const [playActive] = useSound(
    '/sounds/pop-down.mp3',
    { volume: 0.25 }
  );
  const [playOn] = useSound(
    '/sounds/pop-up-on.mp3',
    { volume: 0.25 }
  );
  const [playOff] = useSound(
    '/sounds/pop-up-off.mp3',
    { volume: 0.25 }
  );

  return (
    <HStack
      minW="90%"
      // maxWidth="90%"
      // w="90%"
      minH={'64px'}
      borderWidth={1}
      justifyContent='space-between'
      px={['1rem', null, '2.5rem']}
      mt={2}
      borderRadius={4}

    >
      <Link
        as={NextLink}
        href={'/'}
        variant='custom'
        fontWeight={"semibold"}
        fontSize={['1rem', '1rem', '1.3rem']}
      >
        GajendrasinghDawar
      </Link>
      <IconButton
        fontSize='22px'

        variant='toggleButton'
        onClick={toggleColorMode}
        aria-label='toggle theme'
        icon={colorMode === 'light' ? <TiAdjustBrightness /> : <IoIosMoon />}

        onChange={() => setIsChecked(!isChecked)}
        onMouseDown={playActive}
        onMouseUp={() => {
          isChecked ? playOff() : playOn();
        }}
      />
    </HStack>
  );
}