// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                fontFamily: 'myOldFont',
                bg: mode('site.whiteBg', 'site.darkBg')(props),
                lineHeight: "1.5",
                letterSpacing: '1px'
            },
        }
    }
}

export default styles