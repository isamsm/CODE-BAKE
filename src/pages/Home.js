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
        <h1> CODE&BAKE </h1>
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
              <img className='first-cake' src={first_cake} alt='Imagem ilustrative primeiro bolo da vitrine' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='second-cake' src={second_cake} alt='Imagem ilustrative segundo bolo da vitrine' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='third-cake' src={third_cake} alt='Imagem ilustrative terceiro bolo da vitrine' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='fourth-cake' src={fourth_cake} alt='Imagem ilustrative quarto bolo da vitrine' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='fifth-cake' src={fifth_cake} alt='Imagem ilustrative quinto bolo da vitrine' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='sixth-cake' src={sixth_cake} alt='Imagem ilustrative sexto bolo da vitrine' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='seventh-cake' src={seventh_cake} alt='Imagem ilustrative sétimo bolo da vitrine' />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}


export default Home;
