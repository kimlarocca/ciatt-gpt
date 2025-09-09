export default function useDarkMode() {
  //const twColorMode = useColorMode()
  const isDarkMode = useState('isDarkMode', () => false)
  //twColorMode.preference = 'light'
  const setDarkMode = () => {
    document.documentElement.classList.add('dark-mode')
    document.documentElement.classList.remove('light-mode')
    document.cookie = 'colorMode=dark; path=/; max-age=31536000' // stores for 1 year
    isDarkMode.value = true
    //twColorMode.preference = 'dark'

  }

  const setLightMode = () => {
    document.documentElement.classList.add('light-mode')
    document.documentElement.classList.remove('dark-mode')
    document.cookie = 'colorMode=light; path=/; max-age=31536000' // stores for 1 year
    isDarkMode.value = false
    //twColorMode.preference = 'light'
  }

  const checkColorMode = () => {
    const cookies = document.cookie.split(';')
    const colorMode = cookies
      .find(cookie => cookie.trim().startsWith('colorMode='))
      ?.split('=')[1]
    if (colorMode === 'dark') {
      setDarkMode()
      isDarkMode.value = true
      //twColorMode.preference = 'dark'
    } else if (colorMode === 'light') {
      setLightMode()
      isDarkMode.value = false
      //twColorMode.preference = 'light'
    } else {
      // Default to system preference if no cookie exists
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode()
      } else {
        setLightMode()
      }
    }
  }

  return { setLightMode, checkColorMode, setDarkMode, isDarkMode }
}