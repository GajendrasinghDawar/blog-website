import { extendTheme, withDefaultColorScheme, withDefaultSize } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { ToolTipTheme } from './buttonTheme'
import colorSchemeTheme from './seeColorScheme'

import Buttontheme from './buttonTheme'

const oldTheme = {
    colors: {
        brand: {
            50: '#ffeae1',
            100: '#fdc8b6',
            200: '#f5a489',
            300: '#f0805b',
            400: '#eb5d2d',
            500: '#d24314',
            600: '#a4330f',
            700: '#76240a',
            800: '#481403',
            900: '#1e0400',
        },
    },
    // a
    styles: {
        global: (props) => {
            return {
                body: {
                    fontFamily: 'body',
                    color: mode('gray.800', 'whiteAlpha.900')(props),
                    bg: mode('white', 'black')(props),
                    lineHeight: '1.6rem',

                },
                a: {
                    color: 'teal.500',
                    _hover: {
                        textDecoration: 'underline',
                        // color: 'red'
                    },
                }
            }
        }
    },

}
const globalTheme = extendTheme(

    oldTheme,
    Buttontheme,

)

export default globalTheme