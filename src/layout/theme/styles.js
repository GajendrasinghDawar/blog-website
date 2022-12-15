// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                fontFamily: 'body',

                color: mode('site.colorBlack', 'site.colorWhite')(props),
                bg: mode('site.whiteBg', 'site.darkBg')(props),
                transitionDuration: "normal",
                lineHeight: "base",
            },
            a: {
                color: 'inherit',
                _hover: {

                },

            },
            "*, *::before, &::after": {
                wordWrap: "break-word",
            },
        }
    }


}

export default styles