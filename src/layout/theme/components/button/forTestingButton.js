
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import iconButton from './iconButton'

const Button = {
    // baseStyle: ({ colorMode }) => ({
    //     bg: colorMode === "dark" ? "purple" : "pink",
    //     color: colorMode === "dark" ? "white" : "black",
    //     textTransform: "uppercase",
    //     fontWeight: "semibold",
    //     letterSpacing: "0.02em",
    //     padding: "4px",
    //     borderRadius: "8px",
    //     fontSize: "12px",
    //     border: 'white',
    //     shadow: 'lg',
    //     border: "1px solid",
    //     borderColor: 'blue',

    // }),
    variants: {
        // custom: ({ colorMode }) => ({
        //     bg: colorMode === "dark" ? "pink" : "green.400",
        //     padding: "8px",
        //     color: colorMode === "dark" ? "black" : "white"
        // }),
        toggleButton,
        iconButton

    }
}
export default Button


