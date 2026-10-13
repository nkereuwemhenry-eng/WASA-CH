import { Link } from 'react-router-dom';
import ConnectImage from '../assets/Culture3.jpg';
import Men from '../assets/Men1.jpg';
import Women from '../assets/Women3.jpg';
import Youth from '../assets/Youth1.jpg';
import Children from '../assets/Children1.jpg';

const churchAddress =
  '78 Mumuni Adio Badmus Road, Ijegun Waterside, Satellite Town, Lagos';
const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=78+Mumuni+Adio+Badmus+Road%2C+Ijegun+Waterside%2C+Satellite+Town%2C+Lagos';
const facebookUrl = 'https://www.facebook.com/share/18rLtvw4Er/';

const services = [
  {
    day: 'Sunday',
    title: 'Transforming Lives Service',
    time: 'Starts at 9:00 AM',
    description: 'Join us for worship, the Word, and a time of transformation.',
  },
  {
    day: 'Thursday',
    title: 'Breakthrough Service',
    time: '8:00 AM – 11:00 AM',
    description:
      'Our Thursday gathering includes a counselling session and an opportunity to meet with the Prophet.',
  },
];

const fellowships = [
  {
    title: 'Men’s Fellowship',
    eventId: 'men-showcase',
    description:
      'Grow in spiritual strength, leadership, prayer, and accountability while building a godly family.',
    image: Men,
    imageAlt: 'Men gathering at church',
  },
  {
    title: 'Women’s Fellowship',
    eventId: 'women-showcase',
    description:
      'Find encouragement, meaningful community, and opportunities to grow stronger in faith.',
    image: Women,
    imageAlt: 'Women gathering at church',
  },
  {
    title: 'Youth Fellowship',
    eventId: 'youth-showcase',
    description:
      'Discover purpose, build friendships, and grow in your faith alongside other young people.',
    image: Youth,
    imageAlt: 'Young people gathering at church',
  },
  {
    title: 'Children’s Church',
    eventId: 'children-showcase',
    description:
      'A welcoming place for children to learn the Word of God and grow in faith and love.',
    image: Children,
    imageAlt: 'Children taking part in a church activity',
  },
];

const Connect = () => {
  return (
    <main className='bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100'>
      <section className='px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20'>
        <div className='mx-auto max-w-6xl'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-bold uppercase tracking-[0.24em] text-primary dark:text-teal-300'>
              Word and Spirit Assembly
            </p>
            <h1 className='mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
              We do not do life alone
            </h1>
            <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300'>
              Find your place, grow in faith, and build meaningful relationships
              in a church family grounded in the Word of God.
            </p>
            <a
              href='#fellowships'
              className='mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950'
            >
              Find your community
            </a>
          </div>

          <div className='relative mt-12 h-[280px] overflow-hidden rounded-3xl bg-neutral-900 sm:mt-16 sm:h-[400px] lg:h-[500px]'>
            <img
              src={ConnectImage}
              alt='A gathering from the WASA church community'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
            <p className='absolute bottom-6 left-6 right-6 text-xl font-bold text-white sm:bottom-10 sm:left-10 sm:text-2xl'>
              There is a place for you here.
            </p>
          </div>
        </div>
      </section>

      <section id='services' className='scroll-mt-24 bg-slate-50 px-6 py-16 transition-colors sm:py-20 dark:bg-slate-900/60'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 max-w-2xl'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-teal-300'>
              Join us this week
            </p>
            <h2 className='mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl'>
              Church services
            </h2>
            <p className='mt-4 leading-7 text-slate-600 dark:text-slate-300'>
              We look forward to welcoming you at Word and Spirit Assembly.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {services.map((service) => (
              <article
                key={service.day}
                className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8 dark:border-slate-700 dark:bg-slate-900'
              >
                <p className='text-sm font-bold uppercase tracking-[0.18em] text-primary dark:text-teal-300'>
                  {service.day}
                </p>
                <h3 className='mt-3 text-xl font-bold'>{service.title}</h3>
                <p className='mt-2 font-semibold'>{service.time}</p>
                <p className='mt-3 leading-7 text-slate-600 dark:text-slate-300'>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='fellowships' className='scroll-mt-24 bg-slate-100 px-6 py-16 transition-colors sm:py-20 dark:bg-slate-950'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 max-w-2xl sm:mb-12'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-teal-300'>
              Find your people
            </p>
            <h2 className='mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl'>
              Connect through fellowship
            </h2>
            <p className='mt-4 leading-7 text-slate-600 dark:text-slate-300'>
              There are opportunities for every age and season of life to
              worship, learn, serve, and grow together.
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {fellowships.map((fellowship) => (
              <Link
                key={fellowship.title}
                to={`/events#${fellowship.eventId}`}
                className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900'
              >
                <img
                  src={fellowship.image}
                  alt={fellowship.imageAlt}
                  loading='lazy'
                  className='h-56 w-full object-cover'
                />
                <div className='p-5'>
                  <h3 className='text-lg font-bold uppercase tracking-wide'>
                    {fellowship.title}
                  </h3>
                  <p className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                    {fellowship.description}
                  </p>
                  <span className='mt-5 inline-flex text-sm font-bold text-primary transition-colors hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200'>
                    Learn More <span aria-hidden='true' className='ml-2'>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id='visit' className='scroll-mt-24 bg-slate-50 px-6 py-16 transition-colors sm:py-20 dark:bg-slate-900/60'>
        <div className='mx-auto grid max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center dark:border-slate-700 dark:bg-slate-900'>
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-teal-300'>
              Plan your visit
            </p>
            <h2 className='mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl'>
              Find us in Lagos
            </h2>
            <address className='mt-4 not-italic leading-7 text-slate-700 dark:text-slate-200'>
              {churchAddress}
            </address>
            <p className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>
              Sunday service starts at 9:00 AM. Thursday service runs from
              8:00 AM to 11:00 AM.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row lg:flex-col'>
            <a
              href={directionsUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900'
            >
              Get directions
            </a>
            <a
              href={facebookUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-900'
            >
              Visit our Facebook
            </a>
          </div>
        </div>
      </section>

      <section className='px-6 py-16 sm:py-20'>
        <div className='mx-auto grid max-w-6xl gap-10 rounded-3xl bg-slate-950 px-7 py-10 text-white shadow-xl shadow-slate-900/10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center'>
          <div className='max-w-2xl'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-white/60'>
              Take your next step
            </p>
            <h2 className='mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl'>
              Come worship with us
            </h2>
            <p className='mt-4 leading-7 text-white/70'>
              We would love to welcome you this Sunday or Thursday. Come as you
              are and worship with us.
            </p>
          </div>
          <a
            href={directionsUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-neutral-950 transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950'
          >
            Plan your visit
          </a>
        </div>
      </section>
    </main>
  );
};

export default Connect;
