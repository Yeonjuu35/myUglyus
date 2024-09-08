import React, { useState } from 'react';
import Interview from './Interview';
import Kakaomap from './Kakaomap';
import { Title, Leadcopy } from '../Common/style.js';
import '../../scss/map.scss'

function Map({ bgStyle, componentBlank }) {
    const [targetnum, setTargetNum] = useState(0);

    return (
        <section className={`${bgStyle} ${componentBlank} py-5 position-relative`}>
            <div className='pb-lg-5 pb-3'>
                <Title className='pb-lg-3 pb-2 text-center'>우리 집에 온 채소·과일은 어디서 왔을까?</Title>
                <Leadcopy className='text-center'>여러분이 구해준 채소 한 알, 어디서 왔을까요?</Leadcopy>
            </div>
            <div>
                <div className='d-flex flex-wrap justify-content-between container'>
                    <div className='col-lg-9 col-12 position-relative mapheight'>
                        <Kakaomap setTargetNum={setTargetNum} />
                        <span className='position-absolute w-0 h-0 d-block overflow-hidden opacity-0'>지도</span>
                    </div>
                    <div className='col-lg-3 col-12 d-flex flex-column justify-content-between ps-lg-3 mt-3 mt-lg-0'>
                        <Interview targetnum={targetnum} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Map;

