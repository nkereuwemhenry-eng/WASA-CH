const services = [
  {
    day: 'Sunday',
    title: 'Transforming Lives Service',
    time: 'Starts at 9:00 AM',
    description: 'Join us for worship and the Word as we gather to grow in faith.',
  },
  {
    day: 'Thursday',
    title: 'Breakthrough Service',
    time: '8:00 AM – 11:00 AM',
    description:
      'Includes a counselling session and an opportunity to meet with the Prophet.',
  },
];

const ServiceSchedule = ({ compact = false }) => {
  return (
    <section
      aria-labelledby='service-schedule-title'
      className={`px-6 ${
        compact
          ? 'mx-5 mb-12 mt-2 rounded-3xl bg-white py-12 text-slate-900 shadow-xl shadow-slate-900/10 md:mx-10 md:mb-16 md:mt-4 md:py-16 lg:mx-16 dark:bg-slate-900 dark:text-slate-100 dark:shadow-black/30'
          : 'bg-slate-950 py-16 text-white md:py-20'
      }`}
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8 max-w-2xl'>
          <p className={`text-sm font-bold uppercase tracking-[0.2em] ${
            compact ? 'text-primary dark:text-teal-300' : 'text-teal-300'
          }`}>
            You are welcome
          </p>
          <h2
            id='service-schedule-title'
            className={`mt-3 text-2xl font-black uppercase tracking-tight sm:text-3xl ${
              compact ? 'text-slate-900 dark:text-slate-100' : 'text-white'
            }`}
          >
            Service times
          </h2>
          <p className={`mt-3 leading-7 ${
            compact ? 'text-slate-600 dark:text-slate-300' : 'text-slate-300'
          }`}>
            Join us at Word and Spirit Assembly for our weekly services.
          </p>
        </div>

        <div className='grid gap-5 md:grid-cols-2'>
          {services.map((service) => (
            <article
              key={service.day}
              className={`rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 sm:p-8 ${
                compact
                  ? 'border-slate-200 bg-slate-50 hover:border-teal-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800'
                  : 'border-white/10 bg-white/5 hover:border-teal-300/40 hover:shadow-lg'
              }`}
            >
              <p className={`text-sm font-bold uppercase tracking-[0.18em] ${
                compact ? 'text-primary dark:text-teal-300' : 'text-teal-300'
              }`}>
                {service.day}
              </p>
              <h3 className={`mt-3 text-xl font-bold ${
                compact ? 'text-slate-900 dark:text-slate-100' : 'text-white'
              }`}>
                {service.title}
              </h3>
              <p className={`mt-2 font-semibold ${
                compact ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}>
                {service.time}
              </p>
              <p className={`mt-3 leading-7 ${
                compact ? 'text-slate-600 dark:text-slate-300' : 'text-slate-300'
              }`}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSchedule;
