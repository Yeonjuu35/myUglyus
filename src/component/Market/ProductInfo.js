import { TagType1 } from '../Common/style'

function ProductInfo({ productHref, productImg, productAlt, productNm, discountRate, price, originalPrice, reviewCount, tags = [], productStyle, textboxStyle }) {
    return (
        <a href={productHref}>
            <span>
                <div className='position-relative'>
                    <div className='tagStyle'>
                        {tags.map((tag, index) => (
                            <TagType1 key={index} style={{ backgroundColor: tag.color }} className='me-1'>
                                {tag.text}
                            </TagType1>
                        ))}
                    </div>
                    <img src={productImg} alt={productAlt} className={productStyle} />
                </div>
                <div className={`d-flex flex-column justify-content-center px-lg-4 px-2 ${textboxStyle}`}>
                    <p className="fontMarketName customLineheight">{productNm}</p>
                    <div className="d-flex align-items-center pb-1">
                        {discountRate && <p className="fontMarketPrice colorOrange">{discountRate}</p>}
                        <p className="fontMarketPrice px-lg-2 px-1">{price}</p>
                        {originalPrice && <p className="fontMarketPriceLine">{originalPrice}</p>}
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="/img/market/reviewicon.svg" alt="리뷰" className="reviewImg pe-lg-2 pe-1" />
                        <p className="fontMarketReview">{reviewCount}</p>
                    </div>
                </div>
            </span>
        </a>
    )
}

export default ProductInfo
