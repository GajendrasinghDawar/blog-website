// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                fontFamily: 'myOldFont',

                // color: mode('site.colorBlack', 'site.colorWhite')(props),
                bg: mode('site.whiteBg', 'site.darkBg')(props),
                // bgGradient: ` radial-gradient(circle, #e3e3e3, #e3e3e3, #e3e3e3, #e3e3e3, #e3e3e3);`,

                letterSpacing: '1px',
                lineHeight: "1.4",
                fontSize: '1.2em',
                letterSpacing: '2px'


            },
            // a: {
            //     color: 'inherit',
            //     _hover: {
            //     },
            // },
            // "*, *::before, &::after": {
            //     wordWrap: "break-word",
            // },
        }
    }


}

export default styles