import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    body: "GeneralSans, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
    heading: "ClashDisplay, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
    fontDisplay: 'optional',
    webkitFontSmoothing: 'antialiased'
  },

  colors: {
    primary: {
      '50': '#2475FB',
      '100': '#0561FA',
      '200': '#A294F5',
      '300': '#7E6AF1',
      '400': '#5A40ED',
      '500': '#3516E9',
      '600': '#2B11BB',
      '700': '#200D8C',
      '800': '#15095D',
      '900': '#0B042F'
    },
    secondary: {
      '50': '#141414',
      '100': '#787F84',
      '200': '#1D1D1F',
      '300': '#FA6161',
      '400': '#F83535',
      '500': '#F60909',
      '600': '#C50707',
      '700': '#940505',
      '800': '#630303',
      '900': '#310202'
    }
  },

  styles: {
    global: {
      html: {
        webkitFontSmoothing: 'antialiased'
      },
      body: {
        transition: 'all 0.2s ease-out'
      },

      button: {
        _focus: {
          boxShadow: 'none !important'
        },
        _hover: {
          opacity: 0.9
        }
      }
    }
  },

  components: {
    Text: {
      baseStyle: {
        color: 'secondary.100',
        opacity: '98%',
        fontWeight: 400
      }
    },

    Link: {
      baseStyle: {
        borderBottom: '1px solid',
        _hover: {
          textDecoration: 'none',
          transform: 'scale(1.01)'
        },
        _focus: {
          boxShadow: 'none !important'
        }
      }
    },

    Button: {
      sizes: {
        lg: {
          h: 12
        }
      },

      variants: {
        primary: {
          backgroundColor: '#0047FF',
          color: '#FFFFFF',
          rounded: '12px',
          transition: '0.4s ease-out',
          // flexGrow: '1',
          // flexShrink: '0',
          _hover: {
            opacity: 0.9,
            // transform: 'scale(1.02)',

            _disabled: {
              backgroundColor: 'rgb(0 0 0 / 90%)'
            }
          }
        },

        'primary-outline': {
          border: '1px solid #0047FF',
          color: '#0047FF',
          backgroundColor: 'transparent',
          rounded: 'full',
          _focus: {
            opacity: 0.5
          }
        },

        accent: {
          background: 'rgba(0, 71, 255, 4%)',
          color: '#0047FF',
          rounded: 'full',
          transition: '0.4s ease-out'
        },

        secondary: {
          background: 'rgba(255, 255, 255, 12%)',
          color: '#fff',
          rounded: 'full',
          transition: '0.2s ease-out',
          // flexGrow: '1',
          // flexShrink: '0',
          backdropFilter: 'blur(12px)',
          _hover: {
            opacity: '0.9',
            color: '#fff'
          }
        }
      }
    }
  }
})
