import darkModeIcon from '../assets/Moon-icon.png'
import lightModeIcon from '../assets/Sun-icon.png'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button
      type='button'
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:focus:ring-offset-slate-900'
    >
      <img
        src={theme === 'dark' ? lightModeIcon : darkModeIcon}
        alt=''
        aria-hidden='true'
        className='size-5 dark:invert'
      />
    </button>
  )
}

export default ThemeToggleBtn