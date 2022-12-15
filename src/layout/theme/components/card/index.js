import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
    // define the part you're going to style
    container: {
        borderRadius: ".5rem",
        padding: "1rem",
        paddingTop: "1.5rem",
        gap: '.25rem',
        border: 'cardBorderWhite',
        // _before: '0 solid #c8c8c8',
        // _after: '0 solid #c8c8c8',
        _hover: {
            borderColor: "border.whiteBorderColorOnHover",
            boxShadow: 'none',
        },
        _dark: {
            borderColor: " rgb(56 56 56/ 1)",
            backgroundColor: 'inherit ',
            _hover: {
                borderColor: " border.darkBorderColorOnHover",
            },
        }
    },
    header: {
        paddingBottom: '2px',
    },
    body: {
        paddingTop: '2px',
    },
    footer: {
        paddingTop: '2px',
    },
})

const Card = defineMultiStyleConfig({ baseStyle })

export default Card