// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                fontFamily: 'myOldFont',

                color: mode('site.colorBlack', 'site.colorWhite')(props),
                bg: mode('site.whiteBg', 'site.darkBg')(props),


                // fix It 👺👹👺 
                letterSpacing: '1px',
                lineHeight: "1.6",
                fontSize: '1.0rem',
                // lineHeight: "40px",
                // fontSize: '20px'

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