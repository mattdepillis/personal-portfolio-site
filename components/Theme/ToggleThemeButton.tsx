// react + other lib imports
import { useCallback, useEffect, useState } from 'react'
import cs from 'classnames'

// icon imports
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunny } from '@react-icons/all-files/io5/IoSunny'

// custom lib methods
import { useDarkMode } from '@/lib/utils/use-dark-mode'

// custom styling
import styles from '../styles.module.css'


const ToggleThemeButton: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunny />}
    </div>
  )
}

export default ToggleThemeButton
