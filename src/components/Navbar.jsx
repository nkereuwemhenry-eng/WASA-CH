import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import closeIcon from '../assets/close-icon.png';
import openIcon from '../assets/Open-icon.png';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeMenu = () => setSidebarOpen(false);
  const handleNavigation = () => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  const linkClass =
    'py-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:hover:text-teal-300';

  return (
    <header className='sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-slate-950/90'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
        <Link to='/' onClick={handleNavigation} aria-label='Word and Spirit Assembly home'>
          <img
            src={Logo}
            alt='Word and Spirit Assembly'
            className='h-11 w-auto sm:h-14'
          />
        </Link>

        {sidebarOpen && (
          <button
            type='button'
            aria-label='Close navigation menu'
            onClick={closeMenu}
            className='fixed inset-0 z-40 bg-slate-950/50 md:hidden'
          />
        )}

        <nav
          aria-label='Main navigation'
          className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col gap-4 bg-white px-7 pb-8 pt-20 text-slate-800 shadow-2xl transition-transform duration-300 md:static md:z-auto md:w-auto md:max-w-none md:translate-x-0 md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0 md:text-sm md:shadow-none dark:bg-slate-900 dark:text-slate-200 dark:md:bg-transparent ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            type='button'
            aria-label='Close navigation menu'
            onClick={closeMenu}
            className='absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden dark:hover:bg-slate-800'
          >
            <img src={closeIcon} alt='' aria-hidden='true' className='h-5 w-5 dark:invert' />
          </button>

          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          <Link onClick={handleNavigation} to='/' className={linkClass}>HOME</Link>
          <Link onClick={handleNavigation} to='/about' className={linkClass}>ABOUT</Link>
          <Link onClick={handleNavigation} to='/connect' className={linkClass}>CONNECT</Link>
          <Link onClick={handleNavigation} to='/events' className={linkClass}>EVENTS</Link>
          <Link
            onClick={handleNavigation}
            to='/give'
            className='inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
          >
            GIVE
          </Link>
        </nav>

        <button
          type='button'
          aria-label='Open navigation menu'
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(true)}
          className='rounded-lg p-2 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden dark:hover:bg-slate-800'
        >
          <img src={openIcon} alt='' aria-hidden='true' className='h-6 w-6 dark:invert' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
