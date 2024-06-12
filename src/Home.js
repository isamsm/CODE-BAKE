import './styles/Home.css'

import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'

import Header from './components/Header'

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
              <img className='first-cake' src='/assets/showcase/first_cake.jpg' alt='primeiro bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='second-cake' src='/assets/showcase/second_cake.jpg' alt='segundo bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='third-cake' src='/assets/showcase/third_cake.jpg' alt='terceiro bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='fourth-cake' src='/assets/showcase/fourth_cake.jpg' alt='quarto bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='fifth-cake' src='/assets/showcase/fifth_cake.jpg' alt='quinto bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='sixth-cake' src='/assets/showcase/sixth_cake.jpg' alt='sexto bolo' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='seventh-cake' src='/assets/showcase/seventh_cake.png' alt='sétimo bolo' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}


export default Home;
