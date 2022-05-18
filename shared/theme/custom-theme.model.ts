export const customTheme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: 'px'
  },
  components: {
    button: {
      styles: {
        borderRadius: '85px',
        padding: '18px 85px',
        fontSize: '25px',
        lineHeight: '37px'
      },
      media: {
        sm: {
          padding: '12px 40px'
        }
      },
      variant: {
        light: {
          background:
            'linear-gradient(125.26deg, rgba(14, 154, 255, 0.9) 7.86%, rgba(0, 222, 222, 0.9) 84.31%), linear-gradient(61.59deg, #28B2EA 6.91%, #22EBBA 124.08%)',
          boxShadow:
            '0px 38.4526px 71.5397px rgba(14, 154, 255, 0.37), inset 0px 1.78849px 20px rgba(255, 255, 255, 0.61)',
          color: '#1B1F2A'
        },
        dark: {
          background:
            'linear-gradient(61.59deg, #C37AF0 6.91%, #4A32F0 124.08%), linear-gradient(116.49deg, rgba(230, 176, 255, 0.8) 21.75%, rgba(131, 114, 223, 0.8) 81.4%), linear-gradient(125.26deg, rgba(14, 154, 255, 0.9) 7.86%, rgba(0, 222, 222, 0.9) 84.31%), linear-gradient(61.59deg, #B17AF0 6.91%, #4A32F0 124.08%);',
          boxShadow:
            '0px 38.4526px 71.5397px rgba(185, 119, 241, 0.37), inset 0px 1.78849px 20px rgba(255, 255, 255, 0.61)',
          color: '#FFFFFF'
        },
        outlined: {
          background: 'transparent',
          boxShadow:
            '0px 30.0153px 45px rgba(0, 222, 222, 0.12), inset 1px 1px 0 #00dede, inset -1px -1px 0 #4a32f0',
          color: '#00DEDE'
        }
      }
    },
    input: {
      styles: {
        background: '#ffffff',
        boxShadow: '14px 41px 100px rgba(49, 89, 211, 0.12)',
        borderRadius: '10px',
        width: '319px',
        height: '60px'
      },
      media: {},
      placeholder: {
        color: '#555555'
      },
      button: {
        background: `linear-gradient(
          116.49deg,
          rgba(230, 176, 255, 0.8) 21.75%,
          rgba(131, 114, 223, 0.8) 81.4%
        ),
        linear-gradient(349.22deg, #f79239 14.16%, #f7c759 77.73%), #ef3679`
      }
    },
    carouselButton: {
      styles: {
        background: 'linear-gradient(0deg, #5E63B0, #5E63B0), #FFF',
        boxShadow: '25px 23px 56px rgba(27, 49, 66, 0.15)',
        borderRadius: '50%',
        color: '#FFF'
      }
    },
    carouselPaginationButton: {
      styles: {
        borderRadius: '8px',
        opacity: '0.5',
        backgroundColor: '#DEECFF'
      },
      variants: {
        active: {
          backgroundColor: '#B27CD2 !important',
          opacity: 'unset !important'
        }
      }
    },
    card: {
      styles: {
        color: '#FFF',
        backgroundColor: '#191C4F',
        borderRadius: '47px',
        backdropFilter: 'blur(9.77415px)',
        border: 'none'
      },
      decoration: {
        backgroundColor: '#5459AA',
        opacity: '0.1',
        backdropFilter: 'blur(9.77415px)',
        borderRadius: '0 0 68px 68px',
        border: 'none'
      }
    },
    container: {
      styles: {
        maxWidth: '66%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      media: {
        sm: {
          maxWidth: '84%'
        }
      }
    },
    burgerButton: {
      styles: {
        background: `linear-gradient(61.59deg, #c37af0 6.91%, #4a32f0 124.08%),
        linear-gradient(116.49deg, rgba(230, 176, 255, 0.8) 21.75%, rgba(131, 114, 223, 0.8) 81.4%)`,
        boxShadow: `inset 0px 3.30055px 16.5027px rgba(255, 255, 255, 0.52)`
      },
      lines: {
        background: '#ffffff'
      },
      media: {
        sm: {
          maxWidth: '84%'
        }
      }
    },
    searchIcon: {
      styles: {},
      media: {}
    },
    announcement: {
      styles: {},
      media: {},
      variant: {
        light: {
          background: 'linear-gradient(90deg, #0e9aff 0%, #00dede 100%)',
          color: '#1B1F2A'
        },
        dark: {
          background: '#DB8FFF',
          color: '#FFFFFF'
        }
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3399FF',
      light: '#66B2FF',
      dark: '#0059B2',

      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    background: {
      default: '#0E1457',
      main: '#001E3C',
      third: '#080A2C',
      secondary: 'linear-gradient(90deg, #0e9aff 0%, #00dede 100%)',
      secondaryLight: '#191C4F',
      dark: '#080A2C',
      extraDark: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#1B1F2A',
      dark: '#D3D3D3',
      third: '#DB8FFF',
      gray: '#c6c6c6',
      banner: '#00DEDE'
    },
    secondary: {
      main: '#DB8FFF',
      light: '#E7BEFE',
      dark: '#ab47bc',
      negative: '#FF39BC',
      positive: '#28CA68',
      fourth: '#e395ff',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    icons: {
      main: `linear-gradient(
        116.49deg,
        rgba(230, 176, 255, 0.8) 21.75%,
        rgba(131, 114, 223, 0.8) 81.4%
      ),
      linear-gradient(349.22deg, #f79239 14.16%, #f7c759 77.73%), #ef3679`,
      light: `#ffffff`
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: {
      standard: 400,
      normal: 500,
      semiBold: 600
    },
    fontSize: {
      extraLarge: '80px',
      large: '55px',
      medium: '30px',
      normal: '18px',
      small: '16px',
      extraSmall: '13px'
    }
  },
  transitions: {
    normal: 'all 200ms ease'
  },
  backdropFilter: {
    main: 'blur(9.77415px)',
    secondary: 'blur(5px)'
  }
};

export type CustomTheme = typeof customTheme;
