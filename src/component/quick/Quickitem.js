function Quickitem() {
    const menuItems = [
        { quickhref: '#', quickSrc: '/img/quick/mypage.svg', quickAlt: '마이페이지', quickText: '마이페이지'},
        { quickhref: '#', quickSrc: '/img/quick/market.svg', quickAlt: '싱싱마켓', quickText: '싱싱마켓'},
        { quickhref: '#', quickSrc: '/img/quick/event.svg', quickAlt: '이벤트', quickText: '이벤트'},
        { quickhref: '#', quickSrc: '/img/quick/service.svg', quickAlt: '고객센터', quickText: '고객센터'}
    ];
    return (
        <>
            {
                menuItems.map((v, i)=>{
                    return(
                        <li key={`quick${i}`}>
                            <a href={v.quickhref}>
                                <img src={v.quickSrc} alt={v.quickAlt} />
                                <span className='fontQuick'>{v.quickText}</span>
                            </a>
                        </li>
                    )
                })
            } 
        </> 
    )
}

export default Quickitem