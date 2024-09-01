import usdata from '../../data/data.json';
import { DefalutButton } from '../Common/style'

function Interview({ targetnum }) {
    const { mapinfo } = usdata.map;

    const imageSrc = `.${usdata["map"]["dir"]}${mapinfo[targetnum]["proimgnm"]}.${mapinfo[targetnum]["proimgfile"]}`;
    const altText = mapinfo[targetnum]["pronm"];
    const protitleArray = mapinfo[targetnum]["protitle"].split('|');
    const interviewtext = mapinfo[targetnum]["protext"];
    const marketlink = mapinfo[targetnum]["prolink"]

    return (
        <div className='d-flex flex-lg-column flex-wrap'>
            <div className='col-lg-12 col-6'>
                <img className='radiusCustom mb-0 mb-lg-3 img-fluid' src={imageSrc} alt={`${mapinfo[targetnum]["proimgex"]} 생산자 ${mapinfo[targetnum]["pronm"]}님`} />
            </div>
            <div className='col-lg-12 col-6 ps-2 ps-lg-0 d-flex flex-column justify-content-between'>
                <p className='fontMapTitle pb-0 pb-lg-3'>
                    {
                        protitleArray.map((v, i) => (
                            i === 0 ? <span key={`pro${i}`} className="d-none d-xxl-inline">{v} </span> : i === 1 ? <span key={`pro${i}`} className="d-block d-xxl-inline">{v}</span> : <span key={`pro${i}`} className="d-block">{v}</span>
                        ))
                    }
                </p>
                <p className="fontMapSubtitle pb-0 pb-lg-4">{altText}님의 이야기</p>
                <p className='pb-0 pb-lg-4 fontText'>
                    <span className="d-none d-lg-inline">{interviewtext}</span>
                    <a href={marketlink}>
                        <span className="fontText mt-auto d-flex d-lg-none justify-content-end">+ 더보기</span>
                    </a>
                </p>
                <div className="d-none d-lg-flex justify-content-start align-items-center">
                    <DefalutButton>구매하러가기</DefalutButton>
                </div>
                {/* <div className="d-flex d-lg-none my-3 justify-content-center align-items-center w-100">
                    <button type="button" className="font_button mapbuttonstyle_pyj"><a href="#">구매하러가기</a></button>
                </div> */}
            </div>
        </div>
    );
}

export default Interview;

