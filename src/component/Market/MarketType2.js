import { Title, SubTitle, Leadcopy } from '../Common/style';
import ProductInfo from './ProductInfo';
import usdata from '../../data/data.json';

import '../../scss/market.scss';

function MarketType2({ bgStyle, componentBlank }) {
    const { dir, marketType2info } = usdata.marketType2;
    return (
        <section className={`py-5 ${bgStyle} ${componentBlank} position-relative`}>
            <div className='d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-items-center container customWidthS py-5 px-5'>
                <div className='d-flex flex-column pb-4 pb-lg-0 ps-xxl-5 ps-0'>
                    <Title className='text-center order-2 pt-lg-2 pt-1 pb-lg-3 pb-2' fontcolor="#333333">
                        올해의 마지막 한정 판매, 시작!
                    </Title>
                    <SubTitle className='text-center order-1'>
                        Goodbye, 내년에 다시 보자!
                    </SubTitle>
                    <Leadcopy className='text-center order-3 text-nowrap'>
                        자연의 속도에 맞게 알맞게 익어가며 최고의 맛을 유지하기 위해
                        <span className='d-block'>
                            이번 년도 마지막 판매를 진행합니다!
                        </span>
                    </Leadcopy>
                </div>
                <ProductInfo 
                    productHref={marketType2info.productHref}
                    productStyle={marketType2info.productStyle}
                    textboxStyle={marketType2info.textboxStyle}
                    productImg={`${dir}${marketType2info.imgNm}.${marketType2info.imgfile}`}
                    productAlt={marketType2info.productAlt}
                    productNm={marketType2info.productNm}
                    discountRate={marketType2info.discountRate}
                    price={marketType2info.price}
                    originalPrice={marketType2info.originalPrice}
                    reviewCount={marketType2info.reviewCount}
                    tags={marketType2info.tags}
                />
            </div>
        </section>
    );
}

export default MarketType2;
