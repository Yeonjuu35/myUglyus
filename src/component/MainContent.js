import MainSwiper from "./mainSwiper/MainSwiper"
import VegeSwiper from "./VegeSwiper/VegeSwiper"
import Review from "./Review/Review"
import Banner from "./Banner/Banner"
import MarketType1 from "./Market/MarketType1"
import MarketType2 from "./Market/MarketType2"
import Recipe from "./Recipe/Recipe"
import Map from "./Map/Map"
import Subscribe from "./Subscribe/Subscribe"
import Form from "./Form/Form"

import "../scss/banner.scss"

function MainContent() {
    return (
        <>
            <MainSwiper bgStyle={''} componentBlank={'componentBlankDownL'} />
            <VegeSwiper bgStyle={''} componentBlank={'componentBlankDownL'} />
            <Review bgStyle={''} componentBlank={'componentBlankDownL'} />
            <Banner bgStyle={''} componentBlank={'componentBlankDownL'}
                backgroundColor = "#FE663F"
                bannerStyle = "container customBanner1"
                contentBoxCustom = "container customWidthBanner"
                bannerTitle="내게 꼭 맞는 채소박스는?" 
                titleColor="#ffffff"
                bannerSubTitle={
                    <>
                        <span className="d-none d-sm-inline">나의 집밥 유형 진단하고 </span>
                        채소박스 추천 받기 &gt;
                    </>
                }
                subTitleColor="#ffffff"
                bannerImgSrc="/img/eventbanner/vegetest.png" 
                bannerImgAlt="집밥 유형 진단" 
                bannerImgStyle = "bannerImg"
                linkHref="#"
            />
            <MarketType1 bgStyle={''} componentBlank={''} />
            <Banner bgStyle={'colorBg'} componentBlank={'componentBlankUD'}
                backgroundColor = "#FFBBD7"
                bannerStyle = "container customBanner2"
                contentBoxCustom = "container customWidthBanner"
                bannerTitle="돌아왔구마! 유기농 고구마 3kg" 
                titleColor="#333333"
                bannerSubTitle={
                    <>
                        <span className="d-none d-sm-inline">다시 돌아온 유기농 고구마, </span>
                        얼리버드 주문시 최대 25% 할인!
                    </>
                }
                subTitleColor="#333333"
                bannerImgSrc="/img/eventbanner/sweetpotato.jpg" 
                bannerImgAlt="유기농 고구마 3kg" 
                bannerImgStyle = "bannerImg"
                linkHref="#"
            />
            <MarketType2 bgStyle={''} componentBlank={''} />
            <Recipe bgStyle={''} componentBlank={'componentBlankUpL componentBlankDownL'} />
            <Map bgStyle={''} componentBlank={'componentBlankDownL'} />
            <Subscribe bgStyle={'colorBg2'} componentBlank={''} />
            <Form bgStyle={'colorBg'} componentBlank={''} />
        </>
    )
}

export default MainContent;

