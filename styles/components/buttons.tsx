export const Buttons = {
    variants: {
        primary: {
            bg: 'primary.200',
            color: 'gray.50',
            _hover: {
                bg: 'primary.100',
            },
        },
        primary_light: {
            bg: 'transparent',
            color: 'primary.200',
            _hover: {
                bg: 'primary.200',
                color: 'gray.50',
            },
        },
        secondary: {
            bg: 'secondary.300',
            color: 'gray.50',
            _hover: {
                bg: 'secondary.200',
            },
        },
        secondary_light: {
            bg: 'transparent',
            color: 'secondary.200',
            _hover: {
                bg: 'secondary.200',
                color: 'gray.50',
            },
        },
        gray: {
            bg: 'gray.800',
            color: 'gray.50',
            _hover: {
                bg: 'gray.700',
            },
        },
        gray_light: {
            bg: 'transparent',
            color: 'gray.800',
            _hover: {
                bg: 'gray.800',
                color: 'gray.50',
            }
        },
        gray_light_outline: {
            bg: 'transparent',
            color: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.600',
            _hover: {
                bg: 'gray.700',
                color: 'gray.50',
            }
        },
    },
};