import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const lightModeValue = `
  linear-gradient(
  90deg,
  hsl(302deg 67% 54%) 0%,
  hsl(303deg 67% 27%) 50%,
  hsl(0deg 0% 0%) 100%
)
  `
const darkModeValue = `linear-gradient(
  90deg,
  hsl(148deg 100% 50%) 0%,
  hsl(148deg 95% 48%) 3%,
  hsl(148deg 91% 46%) 7%,
  hsl(148deg 86% 44%) 12%,
  hsl(148deg 81% 41%) 18%,
  hsl(148deg 76% 39%) 26%,
  hsl(148deg 71% 37%) 35%,
  hsl(148deg 67% 35%) 45%,
  hsl(148deg 61% 33%) 56%,
  hsl(148deg 57% 30%) 66%,
  hsl(148deg 52% 28%) 74%,
  hsl(148deg 47% 26%) 81%,
  hsl(149deg 43% 24%) 85%,
  hsl(147deg 38% 22%) 89%,
  hsl(147deg 33% 19%) 92%,
  hsl(149deg 29% 17%) 94%,
  hsl(147deg 24% 15%) 96%,
  hsl(150deg 19% 13%) 98%,
  hsl(143deg 15% 11%) 99%,
  hsl(150deg 10% 8%) 99%,
  hsl(120deg 3% 6%) 100%,
  hsl(0deg 0% 4%) 100%
)`


const nameLogoVariant = defineStyle((props) => {

    return {
        bgClip: "text",
        bgGradient: lightModeValue,
        transition: 'transform 0.15s ease-out, fontWeight 0.15s ease-out',
        textDecorationStyle: "none",
        fontWeight: "semibold",
        _dark: {
            bgClip: "text",
            bgGradient: darkModeValue,
        },

        _hover: {
            transform: "scale(1.05, 1.05)",

            textDecorationStyle: "none",
            _dark: {
                bgClip: "text",
                bgGradient: darkModeValue,
            },
        },

    }
})
export const Link = defineStyleConfig({

    variants: {
        custom: nameLogoVariant,
    }
})