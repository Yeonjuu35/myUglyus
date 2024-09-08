import { Title, Leadcopy } from '../Common/style'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductInfo from './ProductInfo'
import usdata from '../../data/data.json'

function MarketType1({bgStyle, componentBlank}) {
    const { marketType1info, dir } = usdata.marketType1;
    return (
        <section className={`py-5 ${bgStyle} ${componentBlank} position-relative`}>
            <div className='py-5'>
                <div className='d-flex flex-column align-items-center pb-lg-5 pb-3'>
                    <Title className='pb-lg-3 pb-2' fontcolor="#333333">지금 이 순간이 가장 맛있는 날!</Title>
                    <Leadcopy className='text-center'>
                        뜨거운 햇볕 아래, 싱그러운 에너지를 가득 담아 
                        <span className='d-block'>가장 맛있는 기간에 저렴한 가격으로 여러분께 소개합니다!</span>
                    </Leadcopy>
                </div>
                <Swiper className='container customMarket'
                    loop={true}
                    spaceBetween={20}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    speed={700}
                    breakpoints={{
                        1400: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 2.5,
                        },
                        990: {
                            slidesPerView: 4,
                        },
                        659: {
                            slidesPerView: 2.5,
                        },
                        320: {
                            slidesPerView: 1.8,
                        }
                    }}
                >
                    {
                        marketType1info.map((v, i) => (
                            <SwiperSlide key={`market${i}`}>
                                <ProductInfo 
                                    productHref={v.productHref}
                                    productStyle={v.productStyle}
                                    textboxStyle={v.textboxStyle}
                                    productImg={`${dir}${v.imgNm}.${v.imgfile}`}
                                    productAlt={v.productAlt}
                                    productNm={v.productNm}
                                    discountRate={v.discountRate}
                                    price={v.price}
                                    originalPrice={v.originalPrice}
                                    reviewCount={v.reviewCount}
                                    tags={v.tags}
                                />
                            </SwiperSlide>
                          ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default MarketType1
