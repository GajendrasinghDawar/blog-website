import {
  HStack,
  Text,
  useColorMode,
  IconButton,
  Heading
} from "@chakra-ui/react"
import { useState } from "react";
import useSound from 'use-sound';
import { IoIosMoon } from "react-icons/io";
import { TiAdjustBrightness } from "react-icons/ti";

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
      width="full"
      minH={'64px'}
      borderBottomWidth={1}
      justifyContent='space-between'
      px={'2.5rem'}
    >

      <Text
        fontWeight={700}
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
'
      >
        GajendrasinghDawar
      </Text>
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