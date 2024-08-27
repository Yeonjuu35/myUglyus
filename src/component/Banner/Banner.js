import { BannerTitle, BannerSubTitle } from '../Common/style'

function Banner({ bgStyle, componentBlank, bannerTitle, bannerSubTitle, bannerImgSrc, bannerImgAlt, linkHref, titleColor, subTitleColor, bannerStyle, bannerImgStyle, backgroundColor, contentBoxCustom }) {
    return (
        <section className={`${bgStyle} ${componentBlank}`}>
            <div className={`${bannerStyle}`} style={{ backgroundColor: backgroundColor || 'transparent' }}>
                <a href={linkHref}>
                    <span className={`d-flex justify-content-between align-items-center container ${contentBoxCustom}`}>
                        <div>
                            <BannerTitle className='pb-lg-2 pb-1' fontcolor={titleColor}>{bannerTitle}</BannerTitle>
                            <BannerSubTitle fontcolor={subTitleColor}>{bannerSubTitle}</BannerSubTitle>
                        </div>
                        <img src={bannerImgSrc} alt={bannerImgAlt} className={bannerImgStyle} />
                    </span>
                </a>
            </div>
        </section>
    )
}

export default Banner;


