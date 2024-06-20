import '../styles/Home.css'

import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'

import first_cake from '../assets/showcase/first_cake.webp'
import second_cake from '../assets/showcase/second_cake.webp'
import third_cake from '../assets/showcase/third_cake.webp'
import fourth_cake from '../assets/showcase/fourth_cake.webp'
import fifth_cake from '../assets/showcase/fifth_cake.webp'
import sixth_cake from '../assets/showcase/sixth_cake.webp'
import seventh_cake from '../assets/showcase/seventh_cake.webp'

import Header from '../components/Header'

const Home = () => {
  return (
    <>      
      <Header />

      <section className='container-home container-fluid'>
        <div className='main-home'>
          <Swiper
            modules={[ Navigation, Autoplay ]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            autoplay
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              0: {
                  slidesPerView: 4,
                  spaceBetween: 80,
              },
              425: {
                  slidesPerView: 4,
                  spaceBetween: 0,
              },
          }}
          >
            <SwiperSlide>
              <img className='first-cake' src={first_cake} alt='primeiro bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='second-cake' src={second_cake} alt='segundo bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='third-cake' src={third_cake} alt='terceiro bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='fourth-cake' src={fourth_cake} alt='quarto bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='fifth-cake' src={fifth_cake} alt='quinto bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='sixth-cake' src={sixth_cake} alt='sexto bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='seventh-cake' src={seventh_cake} alt='sétimo bolo' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}


export default Home;
