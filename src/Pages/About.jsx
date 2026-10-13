import ptPhoto from '../assets/pt.jpg'
import preachingPhoto from '../assets/belief.jpg'
import ServiceSchedule from '../components/ServiceSchedule'

const About = () => {
  return (
    <>
      <section
        className='relative flex min-h-[450px] items-center justify-center bg-cover bg-center text-center md:min-h-[550px]'
        style={{ backgroundImage: `url(${ptPhoto})` }}
      >
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative z-10 w-full max-w-5xl px-5 py-16 sm:px-8'>
          <span className='mb-8 inline-block rounded-full bg-black/50 px-4 py-2 text-xs text-white md:text-sm'>
            WORD AND SPIRIT ASSEMBLY
          </span>
          <h1 className='text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl'>
            ROOTED IN SPIRITUALITY, WITH POWER
            <span className='block text-sky-300'>FOR DOMINION!</span>
          </h1>
        </div>
      </section>

      <section className='bg-white px-6 py-16 text-slate-900 transition-colors md:px-12 md:py-24 lg:px-20 dark:bg-slate-900 dark:text-slate-100'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:gap-20'>
          <h2 className='text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
            WE SERVE GOD
            <span className='block text-primary dark:text-teal-300'>BY HIS SPIRIT</span>
          </h2>

          <div className='space-y-6 text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300'>
            <p>
              Word and Spirit Assembly is a tribe of believers committed to the Word of
              God, the leading of the Holy Spirit, and the transformation of lives.
            </p>
            <p>
              We are passionate about helping people grow spiritually in their
              relationship with God and live out their faith through worship, prayer,
              fellowship, and service.
            </p>
            <p>
              Our desire is to see lives transformed, families strengthened, and
              believers equipped to stand and make a positive difference in their
              communities.
            </p>
          </div>
        </div>
      </section>

      <section className='relative bg-teal-950 px-5 py-12 md:px-10 md:py-20'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-12 lg:gap-12'>
          <div className='h-[300px] sm:h-[400px] md:col-span-5 md:h-[500px]'>
            <img
              src={preachingPhoto}
              alt='Church leader preaching to the congregation'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>

          <div className='relative rounded-2xl bg-white p-6 text-slate-900 shadow-xl sm:p-8 md:col-span-7 md:p-10 dark:bg-slate-900 dark:text-slate-100'>
            <h2 className='mb-8 text-4xl font-black md:text-5xl'>
              WE <span className='text-primary dark:text-teal-300'>BELIEVE</span>
            </h2>

            <ul className='list-disc space-y-5 pl-5 text-base leading-7 text-slate-600 marker:text-primary md:text-lg dark:text-slate-300 dark:marker:text-teal-300'>
              <li>That the Word of God is our foundation for faith, doctrine, and everyday living.</li>
              <li>That through Jesus Christ, lives can be redeemed, restored, and transformed.</li>
              <li>That the spiritual disciplines we practice help us live with purpose and faith.</li>
              <li>That the mysteries and revelations of God give us authority and power.</li>
            </ul>
          </div>
        </div>
      </section>

      <ServiceSchedule />
    </>
  );
};
export default About;
