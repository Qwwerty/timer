import 'styled-components'
import { darkTheme as defaultTheme } from '../styles/themes/darkTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
