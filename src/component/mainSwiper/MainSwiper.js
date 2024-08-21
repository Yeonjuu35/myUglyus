import { Swiper, SwiperSlide } from 'swiper/react';
import usdata from '../../data/data.json';
import SwiperContent from './SwiperContent';
import '../../scss/mainSwiper.scss'


const MainSwiper = () => {
  const { mainSwiperInfo, dir } = usdata.mainSwiper;
  return (
    <>
      <Swiper className="mySwiper rwdLayout">
        {
          mainSwiperInfo.map((v, i)=> {
            return(
              <SwiperSlide>
                <SwiperContent info={v} dir={dir} />            
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
};

export default MainSwiper;
