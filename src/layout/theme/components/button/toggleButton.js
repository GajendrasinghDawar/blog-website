import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const toggleButton = defineStyle({
    background: 'themeButton.whiteBg',
    color: 'themeButton.whiteColor',
    borderRadius: "9999px",
    borderWidth: '1px',
    borderColor: 'transparent',
    fontSize: '22px',
    _focusVisible: {
        background: "themeButton.whiteFocusBg",
    },

    _dark: {
        background: 'themeButton.darkBg',
        color: 'themeButton.DarkColor',
    },
    _hover: {
        background: 'themeButton.whiteOnHoverBg',
        _dark: {
            bg: `themeButton.darkOnHoverBg`,
        },
    },


})
export default toggleButton