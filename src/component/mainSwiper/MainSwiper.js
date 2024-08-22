import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import usdata from '../../data/data.json';
import SwiperContent from './SwiperContent';
import '../../scss/mainSwiper.scss';

const MainSwiper = () => {
  const { mainSwiperInfo, dir } = usdata.mainSwiper;

  return (
    <>
      <Swiper className="mySwiper componentBlank"
        // loop={true}
        // autoplay={{delay: 4000, disableOnInteraction: false,}}
        // modules={[Autoplay]}
        // speed={700}
      >
        {mainSwiperInfo.map((v, i) => (
          <SwiperSlide key={i}>
            <SwiperContent info={v} dir={dir} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSwiper;
