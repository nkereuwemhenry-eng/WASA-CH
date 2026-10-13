import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-slate-800 bg-slate-950 px-6 py-10 text-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='font-bold uppercase tracking-wide'>
            Word and Spirit Assembly
          </p>
          <p className='mt-2 text-sm text-white/60'>
            Growing in the Word. Living by the Spirit.
          </p>
        </div>

        <nav aria-label='Footer navigation' className='flex flex-wrap gap-x-6 gap-y-3 text-sm'>
          <Link className='text-white/75 transition hover:text-white' to='/'>
            Home
          </Link>
          <Link className='text-white/75 transition hover:text-white' to='/about'>
            About
          </Link>
          <Link className='text-white/75 transition hover:text-white' to='/connect'>
            Connect
          </Link>
          <Link className='text-white/75 transition hover:text-white' to='/events'>
            Events
          </Link>
          <Link className='font-bold text-sky-300 transition hover:text-white' to='/give'>
            Give
          </Link>
        </nav>
      </div>
      <div className='mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-center text-sm text-white/60'>
        © {currentYear} Word and Spirit Assembly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
