import { mode } from '@chakra-ui/theme-tools'
import { drawerAnatomy as parts } from "@chakra-ui/anatomy"
import {
    createMultiStyleConfigHelpers,
    cssVar,
    defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)


const baseStyleCloseButton = defineStyle({
    position: "absolute",
    top: "4",
    insetEnd: "3",
    // my
    background: 'themeButton.whiteBg',
    color: 'themeButton.whiteColor',
    borderRadius: "9999px",
    borderWidth: '1px',
    borderColor: 'transparent',
    // fontSize: '22px',
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

const baseStyleHeader = defineStyle({
    px: "6",
    py: "4",
    fontSize: "xl",
    fontWeight: "semibold",
    color: 'site.colorBlack',
    bg: 'site.whiteBg',
    width: "full",
    minH: '64px',
    borderBottomWidth: '1px',
    _dark: {
        color: 'site.colorWhite',
        backgroundColor: 'site.darkBg ',
    }
})


const baseStyleBody = defineStyle({
    px: "6",
    py: "2",
    flex: "1",
    overflow: "auto",
    color: 'site.colorBlack',
    bg: 'site.whiteBg',
    _dark: {
        color: 'site.colorWhite',
        backgroundColor: 'site.darkBg ',
    }
})




const baseStyle = definePartsStyle((props) => ({

    header: baseStyleHeader,
    closeButton: baseStyleCloseButton,
    body: baseStyleBody,
    // footer: baseStyleFooter,
}))
const Drawer = defineMultiStyleConfig({
    baseStyle,
})

export default Drawer;