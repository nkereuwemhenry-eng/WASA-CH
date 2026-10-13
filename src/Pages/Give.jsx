const Give = () => {
  return (
    <main className='min-h-[70vh] bg-slate-50 px-4 py-14 text-slate-900 transition-colors sm:px-6 sm:py-20 lg:py-24 dark:bg-slate-950 dark:text-slate-100'>
      <div className='mx-auto max-w-4xl'>
        <div className='text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.22em] text-primary dark:text-teal-300'>
            Word and Spirit Assembly
          </p>
          <h1 className='mt-4 text-3xl font-black uppercase tracking-tight sm:text-5xl'>
            Give and support
          </h1>
          <p className='mx-auto mt-5 max-w-2xl leading-7 text-slate-600 sm:text-lg dark:text-slate-300'>
            Thank you for sowing into the work of Word and Spirit Assembly.
            Your tithes, offerings, and gifts help support the ministry.
          </p>
        </div>

        <section
          aria-labelledby='bank-details-title'
          className='mx-auto mt-12 max-w-2xl rounded-3xl bg-white p-7 text-slate-900 shadow-xl shadow-slate-900/10 sm:p-10 dark:bg-slate-900 dark:text-slate-100 dark:shadow-black/30'
        >
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-teal-300'>
            Bank transfer
          </p>
          <h2 id='bank-details-title' className='mt-3 text-2xl font-bold'>
            Account details
          </h2>

          <dl className='mt-8 divide-y divide-slate-200 dark:divide-slate-700'>
            <div className='flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6'>
              <dt className='text-sm text-slate-500 dark:text-slate-400'>Bank</dt>
              <dd className='font-semibold'>Zenith Bank</dd>
            </div>
            <div className='flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6'>
              <dt className='text-sm text-slate-500 dark:text-slate-400'>Account name</dt>
              <dd className='font-semibold'>Word and Spirit Assembly</dd>
            </div>
            <div className='flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6'>
              <dt className='text-sm text-slate-500 dark:text-slate-400'>Account number</dt>
              <dd className='break-all text-2xl font-bold tracking-[0.12em]'>
                1014381668
              </dd>
            </div>
          </dl>

          <p className='mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400'>
            Please confirm the account details with the church before
            transferring if you have any concerns.
          </p>
        </section>

        <p className='mt-8 text-center text-sm leading-6 text-slate-600 dark:text-slate-300'>
          You may give toward tithes, offerings, sowing, or general ministry
          support.
        </p>
      </div>
    </main>
  );
};

export default Give;
