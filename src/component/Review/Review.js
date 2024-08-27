import { Title, Leadcopy, DefalutButton } from '../Common/style'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReviewImg from './ReviewImg';

function Review({bgStyle, componentBlank}) {
    return (
        <section className={`${bgStyle} ${componentBlank}`}>
            <div className='d-flex flex-column align-items-center'>
                <Title className='pb-lg-3 pb-2'>신경쓰지 않아도 집 앞까지 신선하게!</Title>
                <Leadcopy>실제 고객이 말하는 남다른 채소박스 구독 후기 보고가세요.</Leadcopy>
                <Swiper className=''
                    // loop={true}
                    // loopedSlides={2}
                    // slidesPerView={1.1}
                    // spaceBetween={100}
                    // centeredSlides={true}
                    // autoplay={{ delay: 3000, disableOnInteraction: false, }} 
                    // modules={[Autoplay]}
                    // speed={700}
                >
                    <SwiperSlide>
                        <ReviewImg
                            imgSrc=""
                            imgAlt=""
                            userReview=""
                            vegebox=""
                            username=""
                        ></ReviewImg>
                    </SwiperSlide>
                </Swiper>
                <DefalutButton large={true}>이용후기 보러가기</DefalutButton>
            </div>
        </section>
    )
}

export default Review
