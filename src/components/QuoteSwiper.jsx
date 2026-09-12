import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../assets/css/QuoteSwiper.css'

export default function QuoteSwiper({ quotes, title, eyebrow, prevLabel, nextLabel }) {
  return (
    <section className="quote-band" aria-labelledby="quotes-title">
      <div className="quote-band-head">
        <p className="tag eyebrow">{eyebrow}</p>
        <h2 id="quotes-title">{title}</h2>
      </div>

      <Swiper
        key={title}
        className="quote-swiper"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        loop
        speed={800}
        grabCursor
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation
        a11y={{
          prevSlideMessage: prevLabel,
          nextSlideMessage: nextLabel,
        }}
      >
        {quotes.map((quote) => (
          <SwiperSlide key={quote.name}>
            <blockquote className="quote-slide">
              <p>{quote.text}</p>
              <footer>
                <strong>{quote.name}</strong>
                <span className="role">{quote.role}</span>
              </footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
