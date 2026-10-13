import ServiceSchedule from './ServiceSchedule'

const About = () => {
  return (
    <>
      <section id='about' className='bg-white px-5 py-16 text-slate-900 transition-colors sm:px-6 md:py-24 dark:bg-slate-900 dark:text-slate-100'>
        <div className='mx-auto max-w-6xl md:pl-10 lg:pl-16'>
          <span className='mb-6 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-primary dark:bg-teal-950 dark:text-teal-300'>
            WELCOME TO WASA
          </span>
          <h1 className='mb-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white'>
            WELCOME HOME!
          </h1>
          <p className='max-w-lg text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300'>
            A place to encounter God, grow in faith, discover purpose and experience a life transformed by His Word and Spirit.
          </p>
        </div>
      </section>
      <ServiceSchedule compact />
    </>
  )
}

export default About