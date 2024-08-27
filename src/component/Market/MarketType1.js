import { Title, Leadcopy } from '../Common/style'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductInfo from './ProductInfo'

function MarketType1({bgStyle, componentBlank}) {
    return (
        <section className={`colorBg py-5 ${bgStyle} ${componentBlank}`}>
            <div className='py-5'>
                <div className='d-flex flex-column align-items-center pb-5'>
                    <Title className='pb-lg-3 pb-2' fontcolor="#333333">지금 이 순간이 가장 맛있는 날!</Title>
                    <Leadcopy className='text-center'>
                        뜨거운 햇볕 아래, 싱그러운 에너지를 가득 담아 
                        <span className='d-block'>가장 맛있는 기간에 저렴한 가격으로 여러분께 소개합니다!</span>
                    </Leadcopy>
                </div>
                <Swiper className='container customWidthS'
                    loop={true}
                    spaceBetween={0}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    speed={700}
                    breakpoints={{
                        1400: {
                            slidesPerView: 4,
                        },
                        1399: {
                            slidesPerView: 3.1,
                        },
                        575: {
                            slidesPerView: 2.1,
                        }
                    }}
                >
                    {
                        [0, 1, 2, 3].map(() => {
                            return (
                                <SwiperSlide>
                                    <ProductInfo 
                                        productHref="#"
                                        productStyle="productStyleType1"
                                        textboxStyle="textboxType1"
                                        productImg="/img/market/passionfruit.jpg"
                                        productAlt="무농약 백향과 패션프루트 1kg"
                                        productNm="무농약 백향과 패션프루트 1kg"
                                        discountRate="10%"
                                        price="17,900원"
                                        originalPrice="19,900원"
                                        reviewCount="999+"
                                        tags={[
                                            { text: '한정판매', color: '#FF2F2F' }
                                        ]}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default MarketType1
