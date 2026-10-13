import leadPastorImage from '../assets/About-photo.jpg';

const Leadpastor = () => {
  return (
    <section className='relative w-full overflow-hidden bg-slate-950 text-white'>
      <div className='absolute inset-0'>
        <img
          src={leadPastorImage}
          alt='Lead Pastor Chris Ekeh'
          className='h-full w-full object-cover object-top grayscale'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/90' />
      </div>

      <div className='relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-16 xl:px-20 lg:py-20'>
        <div className='hidden lg:block' />

        <div className='flex flex-col justify-center lg:pl-8'>
          <h2 className='mb-6 text-[22px] font-bold uppercase tracking-[0.22em] text-white sm:text-[26px]'>
            The King In Zion
          </h2>

          <div className='max-w-[480px] space-y-6 text-[14px] leading-7 text-white/70 lg:text-[15px]'>
            <p>
              Pastor Chris Ekeh is the visionary founder and lead pastor of Word and Spirit Assembly. He is renowned for his dynamic preaching and in-depth teaching of the spiritual and physical realities of God's Word.
              His mission is not just to transform lives, but also to equip believers to stand strong and firm, with the capacity to rule, conquer, and dominate their world through spiritual knowledge of God's Word.
            </p>
            <p>
              Pastor Chris Ekeh&apos;s ministry began in the early 90s in Enugu State, Nigeria. He later moved to Lagos, where he graduated from the Word of Faith Bible Institute (WOFBI).
              He was ordained and commissioned into full-time ministry as a prophet by Bishop David Oyedepo in 1998.
              His ministry is backed by a strong prophetic gift, and his world has not recovered from the impact of his spiritual revelations.
            </p>
            <p>
              He is the author of many books that have blessed and transformed lives all over the world, including Breaking the Order, among others.
            </p>
            <p>
              He is married to Pastor Chioma Ekeh, and their marriage is blessed with three children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadpastor;
