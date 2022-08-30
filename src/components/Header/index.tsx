import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeDarkModeContext } from '../../App'

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeDarkModeContext)

  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />

        <div>
          {theme === 'dark' ? (
            <Sun onClick={toggleTheme} size={24} />
          ) : (
            <Moon onClick={toggleTheme} size={24} />
          )}
        </div>
      </div>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
