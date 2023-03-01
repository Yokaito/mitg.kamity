import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

type ThemeType = 'light' | 'dark'

const tailwindDark = 'dark'

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const html = document.querySelector('html')

    if (!html) return

    if (theme === 'dark') {
      html.classList.add(tailwindDark)
    } else {
      html.classList.remove(tailwindDark)
    }

    return () => {
      html.classList.remove(tailwindDark)
    }
  }, [theme])

  return {
    theme,
    toggleTheme,
  }
}
