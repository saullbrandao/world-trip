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
      ':root': {
        '--swiper-navigation-color': '#ffba08',
        '--swiper-pagination-color': '#ffba08',
        '--swiper-pagination-bullet-size': '16px',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': 1,
      },
      body: {
        bg: 'gray.100',
        color: 'gray.600',
      },
    },
  },
})
