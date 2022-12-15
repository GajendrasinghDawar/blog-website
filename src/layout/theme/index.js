// my main theme entrypoint

import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import borders from './foundations/borders'
import colors from './foundations/colors'
import fonts from './foundations/fonts'
// Component style overrides
import Button from './components/button'
import Card from './components/card'
import Heading from './components/heading'

const overrides = {
    styles,
    colors,
    borders,
    fonts,
    // Other foundational style overrides go here

    components: {
        Button,
        Card,
        Heading
        // Other components go here
    },
}

export default extendTheme(overrides)