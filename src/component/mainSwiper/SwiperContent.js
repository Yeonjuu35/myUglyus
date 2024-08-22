import { TagType2, Leadcopy, BigButton } from '../Common/style'


function SwiperContent({info, dir}) {
    const imageSrc = `.${dir}/${info["swiperimgnm"]}.${info["swiperimgfile"]}`
    const titleArray = info["swipertitle"].split('|')
    const leadcopyArray = info["swiperleadcopy"].split('|')

    return (
        <div style={{backgroundColor : info["bgcolor"]}} className='d-flex align-items-center swiperImg'>
            <div className='container customWidthS d-flex align-items-center flex-column flex-lg-row'>
                <div className='col-lg-6 d-flex flex-column ps-lg-5 pb-5 pb-lg-0 scaleCustom'>
                    <h2 className='fontMainSwiper pb-lg-3 pb-2'>
                        {
                            titleArray.map((v, i) => (
                                i === 0 ? v : <span key={i} className='fontBold d-block'>{v}</span>
                            ))
                        }
                    </h2>
                    <Leadcopy className='pb-lg-5 pb-3'>
                        {
                            leadcopyArray.map((v, i)=>(
                                i === 0 ? v : <span key={i} className='d-block'>{v}</span>
                            ))
                        }
                    </Leadcopy>
                    <BigButton style={{background: info["btncolor"]}}>{info["btntext"]}</BigButton>
                </div>
                <div className='col-lg-6 position-relative'>
                    {info["swipertag"] && <TagType2 style={{background: info["swipertagcolor"]}} className='swipertagStyle'>{info["swipertag"]}</TagType2>}
                    <img src={imageSrc} alt={`${info["swipernm"]}`} className='d-block mainImg radiusCustom'/>
                </div>
            </div>
        </div>
    )
}

export default SwiperContent
