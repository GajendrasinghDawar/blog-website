import { extendTheme, withDefaultColorScheme, withDefaultSize, withDefaultVariant, withDefaultProps } from '@chakra-ui/react'

const colorSchemeTheme = extendTheme(
    withDefaultColorScheme({
        colorScheme: 'red',
        components: ['Button', 'Badge'],
    }),
    withDefaultColorScheme({
        colorScheme: 'blue',
        components: ['Alert', 'Table'],
    }),
)


const customVariant = extendTheme(
    withDefaultVariant({
        variant: 'outline',
        components: ['Input', 'NumberInput', 'PinInput'],
    }),
)

const customDefaultProps = extendTheme(
    withDefaultProps({
        defaultProps: {
            variant: 'outline',
            size: 'lg',
        },
        components: ['Input', 'NumberInput', 'PinInput'],
    }),
)

export const customTheme = extendTheme(
    withDefaultSize({
        size: '25rem',
        components: ['Button',],
    }),
)
export default colorSchemeTheme