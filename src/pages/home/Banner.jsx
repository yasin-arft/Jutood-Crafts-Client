// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import OurSlide from './OurSlide';

const Banner = () => {
  const slidersData = [
    { id: 1, image: 'https://i.ibb.co/b53YcbH/spool-jute-string-clothespin-scissor-glass-bottle-with-cork-textured-background.jpg', title: 'Jute string, clothespin, scissor, glass, bottle' },
    { id: 2, image: 'https://i.ibb.co/LNfLvrk/wicker-baskets.jpg', title: 'Jute Wicker baskets'},
    { id: 3, image: 'https://i.ibb.co/mJTKfZ0/wooden-tool-box-sawdust.jpg', title: 'Wooden toolbox' },
    { id: 4, image: 'https://i.ibb.co/9y2r7fS/carpentry-wooden-tool-box-table.jpg', title: 'Carpentry toolbox' }
  ];

  return (
    <section className='mb-6 md:mb-8 lg:mb-10'>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          slidersData.map(item => <SwiperSlide key={item.id}><OurSlide sliderData={item} /></SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Banner;