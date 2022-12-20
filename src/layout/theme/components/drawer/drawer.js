import { drawerAnatomy as parts } from "@chakra-ui/anatomy"
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)


const baseStyleCloseButton = defineStyle({
    position: "relative",
    top: "-7",
    insetEnd: "3",
    ml: '.5rem',
    right: "-52",
    fontSize: '.8em',
    // background: 'themeButton.whiteBg',
    background: 'transparent',
    color: 'themeButton.whiteColor',
    borderRadius: "9999px",
    borderWidth: '1px',
    borderColor: 'transparent',
    _focusVisible: {
        background: "themeButton.whiteFocusBg",
    },
    _dark: {
        // background: 'themeButton.darkBg',
        background: 'transparent',
        color: 'themeButton.DarkColor',
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
    ml: 4,
    borderRadius: 4,
    fontWeight: "semibold",
    color: 'site.colorBlack',
    bg: 'site.whiteBg',
    width: '88%',
    fontSize: "1.2rem",
    minH: '64px',
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
    ml: 4,
    mt: 1,
    mb: 1,
    borderRadius: 4,
    height: "80%",
    width: '80%',
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