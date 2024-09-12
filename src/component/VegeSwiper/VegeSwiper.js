import { Swiper, SwiperSlide } from 'swiper/react';
import { DefalutButton, Title } from '../Common/style'
import { Autoplay } from 'swiper/modules';
import '../../scss/vegeSwiper.scss'

function VegeSwiper({componentBlank, bgStyle}) {
    const vegeItems = [
        { vegeSrc : '/img/vegeSwiper/carrot.png', vegeAlt : '당근', vegeNm : 'carrot', vegeBg : 'carrotBg'},
        { vegeSrc : '/img/vegeSwiper/bokchoy.png', vegeAlt : '청경채', vegeNm : 'bokchoy', vegeBg : 'bokchoyBg'},
        { vegeSrc : '/img/vegeSwiper/cucumber.png', vegeAlt : '오이', vegeNm : 'cucumber', vegeBg : 'cucumberBg'},
        { vegeSrc : '/img/vegeSwiper/lemon.png', vegeAlt : '레몬', vegeNm : 'lemon', vegeBg : 'lemonBg'},
        { vegeSrc : '/img/vegeSwiper/mushroom.png', vegeAlt : '양송이버섯', vegeNm : 'mushroom', vegeBg : 'mushroomBg'},
        { vegeSrc : '/img/vegeSwiper/paprika.png', vegeAlt : '파프리카', vegeNm : 'paprika', vegeBg : 'paprikaBg'}
    ];
    return (
        <section className={`${componentBlank} ${bgStyle} position-relative`}>
            <Title className='text-center pb-lg-5 d-none d-lg-block'>개성 있는 외모, 싱싱하고 맛있는</Title>
            <div className='d-flex flex-column align-items-center'>
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center py-lg-5 py-3 container customWidthM customHeight overflow-hidden'>
                    <p className='fontVegeSwiper text-nowrap whitebgL position-relative d-flex align-items-center justify-content-center'>We Are</p>
                    <Swiper className='vegeCustom hiddenCustom whitebg'
                        loop={true}
                        slidesPerView={1.1}
                        spaceBetween={100}
                        centeredSlides={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false, }} 
                        modules={[Autoplay]}
                        speed={700}
                    >
                        {vegeItems.map((v, i) => (
                            <SwiperSlide key={`vege${i}`} className={`d-flex justify-content-center align-items-center ${v.vegeBg}`}>
                                <span className='whitebg'></span>
                                <img src={v.vegeSrc} alt={v.vegeAlt} className={`position-relative vegeImg ${v.vegeNm}`}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className='fontVegeSwiper text-nowrap mb-3 mb-lg-0 whitebgR position-relative d-flex align-items-center justify-content-center'>Ugly Us</p>
                </div>
                <DefalutButton large={true} href='https://uglyus.co.kr/manual'>채소박스 구경하기</DefalutButton>
            </div>
        </section>
    )
}

export default VegeSwiper
