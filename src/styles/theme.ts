import { createTheme } from '@mui/material/styles'

export const MUIThemeFintalk = createTheme({
  typography: {
    fontFamily: [
      'Barlow',
      'Montserrat',
      'Roboto',
      'Helvetica',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: { main: '#1A1266' },
    secondary: { main: '#fff' },
    info: { main: '#5080FF' },
    error: { main: '#900' },
    success: { main: '#090' }
  }
})

export const theme = {
  colors: {
    primary: '#0C4FE5',
    secundary: '#1A1266',
    secundary2: 'rgba(26, 18, 102, 1)',
    third: '#1A1266',
    fourth: '#201E1E',
    fifth: '#DCDCDC66',
    friday: '#707070',
    seventh: '#5080FF',
    seventh2: 'rgba(80, 128, 255, 0.2)',
    eighth: '#FCFCFC',
    nine: '#00000099',
    ten: '#21212161',
    eleven: '#0000001F',
    thirteen: '#E0E0E0',
    fourteen: '#979797',
    fifteen: '#0096C7',
    black: '#000000DE',
    black2: 'rgba(0, 0, 0, 0.8)',
    black3: 'rgba(32, 30, 30, 1)',
    black4: '#6B6B6B',
    black5: '#BCBCBC',
    twelve: '#FFFFFFDE',
    seventeen: '#F9F9F9',
    sixteen: '#FFFFFF66',
    graphicGreen: '#34B53A',
    graphicBackgroundGreen: '#E2FBD7',
    graphicYellow: '#FFC011',
    graphicYellow2: '#CE9803',
    graphicBackgroundYellow: '#FCE6C0',
    graphicRed: '#E81010',
    graphicBackgroundRed: '#FFCCCD',
  },

  colorsBase: {
    white: '#fff',
    white2: '#EFEFEF',
    black: '#000',
    black2: '#21222D',
    black3: 'rgba(0, 0, 0, 0.87)',
    black4: '#212121',
    black5: 'rgba(0, 0, 0, 0.74)',
    black6: 'rgba(0, 0, 0, 0.25)',
    red: '#900',
    blue: '#0C4FE5',
    blue2: '#192F5D',
    green: '#090',
    green2: '#248E0B',
    orange: '#Ffa500',
    gray: '#222',
    gray2: 'rgba(255, 255, 255, 0.2)',
    gray3: '#DBDADA',
    gray4: 'rgba(0, 0, 0, 0.5)',
    gray5: '#C5C5C5',
    gray6: '#B2B2B2',
    gray7: 'rgba(0, 0, 0, 0.12)',
    gray8: 'rgba(33, 33, 33, 0.38)',
    gray9: '#DEE2E6',
    gray10: '#DFDFDF',
    gray11: '#00000061',
    gray12: '#000000BD',
    gray13: 'rgba(112, 112, 112, 1)',
    gray14: 'rgba(219, 218, 218, 1)',
    gray15: 'rgba(107, 107, 107, 1)',
    yellow: 'rgba(255, 192, 17, 1)',
    yellow2: 'rgba(252, 230, 192, 1)',
    red2: 'rgba(232, 16, 16, 1)',
    red3: 'rgba(255, 204, 205, 1)',
    green3: 'rgba(36, 142, 11, 1)',
    green4: 'rgba(226, 251, 215, 1)'
  },

  hovers: {
    primary: '#5c231b'
  },

  shadows: {
    primary: 'rgba(0, 0, 0, 0.2)',
    secundary: 'rgba(0, 0, 0, 0.4)',
    third: 'rgba(0, 0, 0, 0.5)',
    fourth: 'rgba(0, 0, 0, 1)',
    fifth: 'rgba(0, 0, 0, 0.1)',
    friday: 'rgba(0, 0, 0, 0.8)'
  }
}
