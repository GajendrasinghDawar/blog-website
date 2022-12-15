import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

// const baseStyle = defineStyle({
//     fontFamily: "heading",
//     fontWeight: "bold",
// })

// const sizes = {
//     "4xl": defineStyle({
//         fontSize: ["6xl", null, "7xl"],
//         lineHeight: 1,
//     }),
//     "3xl": defineStyle({
//         fontSize: ["5xl", null, "6xl"],
//         lineHeight: 1,
//     }),
//     "2xl": defineStyle({
//         fontSize: ["4xl", null, "5xl"],
//         lineHeight: [1.2, null, 1],
//     }),
//     xl: defineStyle({
//         fontSize: ["3xl", null, "4xl"],
//         lineHeight: [1.33, null, 1.2],
//     }),
//     lg: defineStyle({
//         fontSize: ["2xl", null, "3xl"],
//         lineHeight: [1.33, null, 1.2],
//     }),
//     // md: defineStyle({
//     //     fontSize: "xl",
//     //     lineHeight: 1.2,
//     // }),
//     // sm: defineStyle({
//     //     fontSize: "md",
//     //     lineHeight: 1.2,
//     // }),
//     // xs: defineStyle({
//     //     fontSize: "sm",
//     //     lineHeight: 1.2,
//     // }),
// }

export const Heading = defineStyleConfig({
    // baseStyle,
    // sizes,
    variants: {
        myHeading: {
            fontSize: "2rem",
            lineHeight: 1.2,
            bgGradient: `linear-gradient(330deg,hsl(0deg 0% 89%) 0%,hsl(344deg 0% 56%) 50%,hsl(0deg 0% 26%) 100%)`,
            bgClip: "text"
        }
    }

})

export default Heading