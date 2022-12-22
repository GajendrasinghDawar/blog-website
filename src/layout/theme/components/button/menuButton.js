import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const menuButton = defineStyle({
    background: 'themeButton.whiteOnHoverBg',
    color: 'fill.fillPink',
    borderRadius: "9999px",
    borderWidth: '1px',
    borderColor: 'transparent',
    fontSize: '22px',
    _focusVisible: {
        background: "themeButton.whiteFocusBg",
    },

    _dark: {
        background: 'themeButton.darkBg',

        color: 'fill.fillGreen'
    },
    _hover: {
        background: 'themeButton.whiteOnHoverBg',
        _dark: {
            bg: `themeButton.darkOnHoverBg`,
        },
    },


})
export default menuButton