import { useEffect, useState } from 'react'
import Photo1 from '../assets/Photo1.jpg'
import Photo3 from '../assets/Photo3.jpg'
import Display1 from '../assets/Display1.jpg'

const liveUrl = 'https://www.facebook.com/share/1HV8qfFAu1/'

const slides = [
  {
    image: Photo1,
    title: 'WELCOME TO WORD AND SPIRIT ASSEMBLY',
    description:
      "A family where the reality of God's word is experienced and the essence of spirituality is lived.",
    imageAlt: 'Word and Spirit Assembly gathering',
    liveUrl,
  },
  {
    image: Photo3,
    title: 'LIVING IN THE SUPERNATURAL',
    description:
      'We believe in the power of the Holy Spirit to transform lives and bring about supernatural breakthroughs.',
    imageAlt: 'Worship at Word and Spirit Assembly',
    liveUrl,
  },
  {
    image: Display1,
    title: 'ROOTED IN SPIRITUAL DISCIPLINES',
    description:
      'We are committed to growing in our relationship with God through consistent spiritual practices.',
    imageAlt: 'Word and Spirit Assembly community',
    liveUrl,
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-gray-900 text-white sm:min-h-[80vh]">
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-200 sm:text-base">
            Word and Spirit Assembly
          </p>
          <h1 className="text-3xl font-bold leading-tight text-gray-300 sm:text-5xl lg:text-6xl">
            {slides[currentSlide].title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {slides[currentSlide].description}
          </p>
          <a
            href={slides[currentSlide].liveUrl}
            target='_blank'
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-teal-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Watch Live
          </a>
        </div>

        <div className="mt-8 flex gap-3" aria-label="Choose hero slide">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : undefined}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
