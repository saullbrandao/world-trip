import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      600: '#47585b',
      300: '#999999',
      200: '#dadada',
      100: '#f5f8fa',
    },

    orange: {
      300: '#ffba08',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.600',
      },
    },
  },
})
