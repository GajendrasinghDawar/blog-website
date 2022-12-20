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
      width="90%"
      minH={'64px'}
      borderWidth={1}
      justifyContent='space-between'
      px={'2.5rem'}
      mt={2}
      borderRadius={4}
    >
      <Link
        as={NextLink}
        href={'/'}
        variant='custom'
      >
        GajendrasinghDawar
      </Link>
      <IconButton
        variant='toggleButton'
        onClick={toggleColorMode}
        aria-label='toggle theme'
        icon={colorMode === 'light' ? <TiAdjustBrightness /> : <IoIosMoon />}
        mx='1rem'
        onChange={() => setIsChecked(!isChecked)}
        onMouseDown={playActive}
        onMouseUp={() => {
          isChecked ? playOff() : playOn();
        }}
      />
    </HStack>
  );
}