import { defineStyleConfig } from "@chakra-ui/styled-system"


export const Heading = defineStyleConfig({
    variants: {
        myHeading: {
            // lineHeight: 1.2,
            _light: {
                bgGradient: `linear-gradient(
                 90deg,
                 hsl(0deg 0% 26%) 0%,
                 hsl(344deg 0% 24%) 50%,
                 hsl(0deg 0% 22%) 100%)`,
                bgClip: "text",
            },
            _dark: {
                bgGradient: `linear-gradient(330deg,hsl(0deg 0% 89%) 0%,hsl(344deg 0% 56%) 50%,hsl(0deg 0% 26%) 100%)`,
                bgClip: "text",
            }
        }
    }

})

export default Heading