import { Link } from 'react-router-dom';
import FamilyWeekImage from '../assets/Culture1.jpg';
import ConventionImage from '../assets/pph.jpg';
import ChildrenPhotoOne from '../assets/Children1.jpg';
import ChildrenPhotoTwo from '../assets/Children2.jpg';
import ChildrenPhotoThree from '../assets/Children3.jpg';
import ChildrenPhotoFour from '../assets/Children4.jpg';
import YouthPhotoOne from '../assets/Youth1.jpg';
import YouthPhotoTwo from '../assets/Youth2.jpg';
import WomenPhotoOne from '../assets/Women1.jpg';
import WomenPhotoTwo from '../assets/Women2.jpg';
import WomenPhotoThree from '../assets/Women3.jpg';
import MenPhotoOne from '../assets/Men1.jpg';
import MenPhotoTwo from '../assets/hj.jpg';
import CulturePhotoOne from '../assets/Culture1.jpg';
import CulturePhotoTwo from '../assets/Culture2.jpg';
import CulturePhotoThree from '../assets/Culture3.jpg';
import CulturePhotoFour from '../assets/Culture4.jpg';

const familyWeekEvents = [
  {
    week: 'First Sunday',
    group: 'Children',
    title: 'Children’s Talent Showcase',
    description:
      'Children are a heritage from the Lord. The children of WASA take the stage to showcase their potential and God-given abilities in honor and worship to God.',
    photos: [ChildrenPhotoOne, ChildrenPhotoTwo, ChildrenPhotoThree, ChildrenPhotoFour],
    photoAlt: 'Children at Word and Spirit Assembly',
  },
  {
    week: 'Second Sunday',
    group: 'Youth',
    title: 'Youth Talent Showcase',
    description:
      'The strength of a generation is in its youth. The youth of WASA explore and communicate the mind of Christ in unity through their gifts, abilities, and God-given potential.',
    photos: [YouthPhotoOne, YouthPhotoTwo],
    photoAlt: 'Youth at Word and Spirit Assembly',
  },
  {
    week: 'Third Sunday',
    group: 'Women',
    title: 'Women’s Showcase',
    description:
      'The women of the church celebrate their gifts, faith, and contribution to our church family.',
    photos: [WomenPhotoOne, WomenPhotoTwo, WomenPhotoThree],
    photoAlt: 'Women at Word and Spirit Assembly',
  },
  {
    week: 'Fourth Sunday',
    group: 'Men',
    title: 'Men’s Showcase',
    description:
      'WASA men in dominion and authority share their talents and celebrate faith, family, and community.',
    photos: [MenPhotoOne, MenPhotoTwo],
    photoAlt: 'Men at Word and Spirit Assembly',
  },
  {
    week: 'Last Sunday',
    group: 'All cultures',
    title: 'Traditional and Cultural Service',
    description:
      'We celebrate our different cultures as one tribe, sharing our traditions and cultural heritage together in Christ.',
    photos: [CulturePhotoOne, CulturePhotoTwo, CulturePhotoThree, CulturePhotoFour],
    photoAlt: 'Cultural celebration at Word and Spirit Assembly',
  },
];

const Event = () => {
  return (
    <main className='bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100'>
      <section className='px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-20'>
        <div className='mx-auto max-w-7xl'>
          <p className='text-sm font-bold uppercase tracking-[0.22em] text-primary dark:text-teal-300'>
            Life at Word and Spirit Assembly
          </p>
          <h1 className='mt-4 text-3xl font-black uppercase tracking-tight sm:text-5xl'>
            Events &amp; Celebrations
          </h1>
          <p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300'>
            Gather with us throughout the year for worship, fellowship, and
            celebrations that bring our church family together.
          </p>

          <div className='relative mt-8 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-slate-900/10 sm:mt-10 sm:rounded-3xl dark:bg-slate-800 dark:shadow-black/30'>
            <img
              src={FamilyWeekImage}
              alt='Word and Spirit Assembly celebrating together'
              fetchPriority='high'
              className='block h-auto w-full'
            />
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-5 text-white sm:p-8 lg:p-10'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-teal-200 sm:text-sm sm:tracking-[0.2em]'>
                Every August
              </p>
              <h2 className='mt-2 text-2xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl'>
                August Family Week
              </h2>
            </div>
          </div>
        </div>
      </section>

      {familyWeekEvents.map((event, index) => (
        <section
          key={event.week}
          className={`px-4 py-14 transition-colors sm:px-6 sm:py-20 ${
            index % 2 === 0
              ? 'bg-white dark:bg-slate-900'
              : 'bg-slate-100 dark:bg-slate-950'
          }`}
        >
          <div className='mx-auto max-w-6xl'>
            <div className='mb-8 sm:mb-10'>
              <div className='max-w-3xl'>
                <p className='text-sm font-bold uppercase tracking-[0.18em] text-primary dark:text-teal-300'>
                  {event.week} in August · {event.group}
                </p>
                <h2 className='mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl'>
                  {event.title}
                </h2>
                <p className='mt-4 leading-7 text-slate-600 dark:text-slate-300'>
                  {event.description}
                </p>
              </div>
            </div>

            <div
              className={`grid grid-cols-2 gap-3 sm:gap-5 ${
                event.photos.length === 1
                  ? 'lg:grid-cols-3'
                  : event.photos.length === 2
                    ? 'lg:grid-cols-2'
                    : event.photos.length === 3
                      ? 'lg:grid-cols-3'
                      : 'lg:grid-cols-2'
              }`}
            >
              {event.photos.map((photo, photoIndex) => (
                <figure
                  key={photo}
                  className={`group overflow-hidden rounded-2xl bg-slate-200 shadow-sm dark:bg-slate-800 ${
                    event.photos.length === 1 ? 'col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <img
                    src={photo}
                    alt={`${event.photoAlt}, photo ${photoIndex + 1}`}
                    loading='lazy'
                    className='aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className='bg-slate-100 px-4 py-14 transition-colors sm:px-6 sm:py-20 dark:bg-slate-900'>
        <article className='mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10 dark:bg-slate-950 dark:shadow-black/30 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='relative aspect-[4/3] overflow-hidden bg-slate-200 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[520px] dark:bg-slate-800'>
            <img
              src={ConventionImage}
              alt='Pastor preaching at Word and Spirit Assembly'
              loading='lazy'
              className='absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent' />
            <p className='absolute bottom-5 left-5 rounded-full border border-white/25 bg-slate-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:bottom-7 sm:left-7'>
              Word and Spirit Assembly
            </p>
          </div>
          <div className='flex flex-col justify-center p-6 text-slate-900 sm:p-9 lg:p-12 dark:text-slate-100'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-teal-300'>
              Our annual gathering
            </p>
            <h2 className='mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl'>
              Old Path Revival Convention
            </h2>
            <div className='mt-6 inline-flex w-fit items-center gap-3 rounded-xl border border-teal-700/15 bg-teal-50 px-4 py-3 dark:border-teal-300/20 dark:bg-teal-950/60'>
              <span className='text-lg' aria-hidden='true'>✦</span>
              <span className='font-bold text-slate-900 dark:text-white'>
                November
              </span>
            </div>
            <p className='mt-6 leading-7 text-slate-600 dark:text-slate-300'>
              A special time for our church family to come together for
              worship, teaching, miracles, and spiritual renewal as we prepare
              for the new church year.
            </p>
            <p className='mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400'>
              Specific dates and programme details will be shared when they
              are announced.
            </p>
            <Link
              to='/connect'
              className='mt-8 inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950'
            >
              Connect with us <span aria-hidden='true' className='ml-2'>→</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Event;
