import { Title, Leadcopy, DefalutButton } from '../Common/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReviewContent from './ReviewContents';
import usdata from '../../data/data.json';
import '../../scss/review.scss'

function Review({ bgStyle, componentBlank }) {
    const { reviewinfo, dir } = usdata.review;
    return (
        <section className={`${bgStyle} ${componentBlank} py-5 position-relative`}>
            <div className='d-flex flex-column align-items-center py-lg-5'>
                <div className='pb-lg-5 pb-3'>
                    <Title className='pb-lg-3 pb-2 text-center'>신경쓰지 않아도 집 앞까지 신선하게!</Title>
                    <Leadcopy className='text-center'>실제 고객이 말하는 남다른 채소박스 구독 후기 보고가세요.</Leadcopy>
                </div>
                <Swiper className='w-100 pb-5'
                    loop={true}
                    spaceBetween={24}   
                    centeredSlides={true}             
                    autoplay={{ delay: 3000, disableOnInteraction: false }}     
                    modules={[Autoplay]}              
                    speed={700}
                    breakpoints={{
                        1800: {
                            slidesPerView: 5.5,
                        },
                        1700: {
                            slidesPerView: 5,
                        },
                        1600: {
                            slidesPerView: 4.8,
                        },
                        1380: {
                            slidesPerView: 4,
                        },
                        1260: {
                            slidesPerView: 3.7,
                        },
                        1100: {
                            slidesPerView: 3.4,
                        },
                        1024: {
                            slidesPerView: 3.2,
                        },
                        991: {
                            slidesPerView: 2.8,
                        },
                        900: {
                            slidesPerView: 4.5,
                        },
                        758: {
                            slidesPerView: 4,
                        },
                        620: {
                            slidesPerView: 3.5,
                        },
                        570: {
                            slidesPerView: 2.8,
                        },
                        450: {
                            slidesPerView: 2.5,
                        },
                        375: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1.8,
                        }
                    }}
                >
                    {
                        reviewinfo.map((v, i) => (
                            <SwiperSlide key={`review${i}`}>
                                <ReviewContent
                                    imgSrc={`${dir}${v.reviewimgNm}.${v.reviewimgfile}`}
                                    imgAlt={v.reviewimgAlt}
                                    userReview={v.userReview}
                                    vegebox={v.vegebox}
                                    username={v.username}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <DefalutButton large={true}>이용후기 보러가기</DefalutButton>
            </div>
        </section>
    );
}

export default Review;

