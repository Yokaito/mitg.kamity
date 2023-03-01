'use client'

import { useTheme } from '@/sdk/hooks/useTheme'
import Icon from '../Icon'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  const isDarkMode = theme === 'dark'

  return (
    <>
      <button onClick={toggleTheme} className="focus:outline-none">
        <Icon
          className="text-white"
          name={isDarkMode ? 'MoonStars' : 'Sun'}
          width={28}
          height={28}
          weight="regular"
        />
      </button>
    </>
  )
}

export default ThemeToggle
