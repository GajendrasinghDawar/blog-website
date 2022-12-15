import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const iconButton = defineStyle({
    background: 'iconButton.whiteBg',
    borderRadius: "9999px",
    borderWidth: '1px',
    borderColor: 'transparent',
    fontSize: '24px',
    _focusVisible: {
        background: "themeButton.whiteFocusBg",
    },
    _dark: {
        background: 'iconButton.darkBg',
    },
    _hover: {
        background: 'iconButton.whiteOnHoverBg',
        _dark: {
            bg: `iconButton.darkOnHoverBg`,
        },
    },


})
export default iconButton