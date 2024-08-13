import React from 'react'
import { DefalutButton, SnsIcon } from '../Common/style';
import '../../scss/footer.scss';

function Footer({wavecls}) {
    return (
        <footer className={`customFluid py-5 ${wavecls}`}>
            <div className='d-flex flex-column flex-lg-row justify-content-between container customWidthS'>
                <div className='d-flex flex-column px-3 px-lg-0'>
                    <h1 className='order-lg-3 order-0 mb-3 mb-lg-0'>
                        <img className='logoWidth' src='./img/header/logo.svg' alt="어글리어스 로고" />
                    </h1>
                    <h2 className='m-0 fontFooterTitle mb-3'>어글리어스 고객센터 070.4769.0271</h2>
                    <div className='d-flex mb-4'>
                        <div className='d-flex flex-column me-4'>
                            <p className='fontFooterBd'>화·목요일</p>
                            <p className='fontFooterBd my-1'>월·금요일</p>
                            <p className='fontFooterBd'>토·일·공휴일</p>
                        </div>
                        <div className='d-flex flex-column ms-4'>
                            <p className='fontFooterText'>11:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
                            <p className='fontFooterText my-1'>09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
                            <p className='fontFooterText'>휴무</p>
                        </div>
                    </div>
                    <div className='d-flex mb-lg-5 mb-0 pb-4 pb-lg-0 align-items-center'>
                        <DefalutButton className='me-3'>문의하기</DefalutButton>
                        <DefalutButton>자주묻는질문</DefalutButton>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-between footerLine px-3 px-lg-0 pb-5'>
                    <div className='d-flex justify-content-lg-end py-4 py-lg-0'>
                        <SnsIcon href="#" className='footerIcon d-flex justify-content-center align-items-center me-2'>
                            <img src="./img/footer/facebook.svg" alt="페이스북" />
                        </SnsIcon>
                        <SnsIcon href="#" className='footerIcon d-flex justify-content-center align-items-center me-2'>
                            <img src="./img/footer/instagram.svg" alt="인스타그램" />
                        </SnsIcon>
                        <SnsIcon href="#" className='footerIcon d-flex justify-content-center align-items-center me-2'>
                            <img src="./img/footer/youtube.svg" alt="유튜브" />
                        </SnsIcon>
                        <SnsIcon href="#" className='footerIcon d-flex justify-content-center align-items-center'>
                            <img src="./img/footer/twitter.svg" alt="트위터" />
                        </SnsIcon>
                    </div>
                    <div>
                        <p className='fontFooterText text-lg-end'>상호명 : 주식회사 캐비지 | 대표 : 최현주 | 사업자등록번호 : 572-81-02287 | 소재지 : 서울특별시 영등포구 양평로 144, 8층(양평동5가)</p>
                        <p className='fontFooterText text-lg-end my-1'>통신판매업 신고번호 : 2021-화성동부-0302 | 제휴 및 납품 문의 : biz@uglyus.co.kr | 농산물 납품 및 긴급구출 제보 : farm@uglyus.co.kr</p>
                        <p className='fontFooterText text-lg-end'>서비스 이용약관개인정보 처리방침 Copyright ⓒ 2024 주식회사 캐비지 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
