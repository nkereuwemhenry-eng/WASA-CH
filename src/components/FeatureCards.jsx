import aboutPhoto from '../assets/About-photo.jpg'
import communityPhoto from '../assets/comm.jpg'
import culturePhoto from '../assets/Culture1.jpg'
import { Link } from 'react-router-dom'

const cards = [
    {
        category: 'WHO WE ARE',
        title: 'ABOUT US',
        image: aboutPhoto,
        link: '/about',
        action: 'Learn More',
    },
    {
        category: 'JOIN A TRIBE',
        title: 'Connect With Us',
        image: communityPhoto,
        link: '/connect',
        action: 'Join Now',
    },
    {
        category: 'EVENTS/CELEBRATIONS',
        title: 'Events & Celebrations',
        image: culturePhoto,
        link: '/events',
        action: 'View Events',
    },
];

const FeatureCards = () => {
  return (
    <section className='bg-slate-50 px-4 pb-16 pt-4 transition-colors sm:px-6 sm:pb-20 md:px-10 md:pb-24 lg:px-16 dark:bg-slate-950'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {
                cards.map((card) => (
                    <Link
                        key={card.title}
                        to={card.link}
                        className='group relative block h-80 overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/40 sm:h-96 lg:h-[440px] dark:shadow-black/30'
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-black/40' />
                        <div className='absolute inset-0 flex flex-col justify-between p-6 md:p-7 text-white'>
                            <span className='text-xs font-semibold uppercase tracking-[0.2em]'>{card.category}</span>
                            <h3 className='mt-2 text-2xl font-bold uppercase'>{card.title}</h3>
                            <span className='mt-4 inline-flex w-fit rounded-full border border-white/60 px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300 group-hover:bg-white group-hover:text-black'>
                                {card.action}
                            </span>
                        </div>
                    </Link>
                ))
            }

        </div>

    </section>
  )
}

export default FeatureCards
