import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/darkTheme'
import { lightTheme } from './styles/themes/lightTheme'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { createContext, useState } from 'react'

interface ThemeProviderType {
  theme: string
  toggleTheme: () => void
}

export const ThemeDarkModeContext = createContext({} as ThemeProviderType)

export function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    }

    if (theme === 'light') {
      setTheme('dark')
    }
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <ThemeDarkModeContext.Provider value={{ theme, toggleTheme }}>
            <Router />
          </ThemeDarkModeContext.Provider>
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
