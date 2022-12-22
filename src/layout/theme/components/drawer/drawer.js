import { drawerAnatomy as parts } from "@chakra-ui/anatomy"
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)


const baseStyleCloseButton = defineStyle({
    position: 'absolute',
    top: '2',
    insetEnd: "3",
    right: '12',
    fontSize: '.8em',
    background: 'transparent',
    color: 'fill.fillRed',
    borderRadius: "9999px",
    borderWidth: '1px',
    borderColor: 'transparent',
    _focusVisible: {
        background: "themeButton.whiteFocusBg",
    },
    _dark: {
        // background: 'themeButton.darkBg',
        background: 'transparent',
        color: 'fill.fillRed',
    },
    _hover: {
        // background: 'themeButton.whiteOnHoverBg',
        background: 'transparent',
        _dark: {
            bg: `themeButton.darkOnHoverBg`,
        },
    },
})

const baseStyleHeader = defineStyle({
    mt: 2,
    ml: 3.5,
    borderRadius: 4,
    fontWeight: "semibold",
    color: 'site.colorBlack',
    bg: 'site.whiteBg',
    maxWidth: '80%',
    borderWidth: '1px',
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
    // new style
    borderWidth: '1px',
    ml: 3.5,
    mt: 1,
    mb: 1,
    borderRadius: 4,
    height: "80%",
    maxWidth: '80%',
    _dark: {
        color: 'site.colorWhite',
        backgroundColor: 'site.darkBg ',
    }
})

const baseStyleDialog = defineStyle((props) => { })


const baseStyle = definePartsStyle((props) => ({
    header: baseStyleHeader,
    closeButton: baseStyleCloseButton,
    body: baseStyleBody,
    dialog: baseStyleDialog,
}))
const Drawer = defineMultiStyleConfig({
    baseStyle,
})

export default Drawer;