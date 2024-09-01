import { Title, Leadcopy } from '../Common/style.js';
// import Formbox from './Formbox'
import Formboxhook from './Formboxhook'
import '../../scss/form.scss'

function Form({ bgStyle, componentBlank }) {
    return (
        <section className={`${bgStyle} ${componentBlank} py-5`}>
            <div className="container customWidthS py-5">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-lg-5 me-lg-auto">
                        <div className="mb-lg-0 mb-4 text-center">
                            <Title className="pb-lg-3 pb-2" fontcolor="#333333">구출이 필요한 농산물이 있나요?</Title>
                            <Leadcopy>
                                구출이 필요한 농산물이 있다면 확인 후 연락 드리겠습니다.
                                <span className="d-none d-lg-block text-nowrap">회신까지 2~3일 정도 소요될 수 있으며, 빠르게 연락 드리겠습니다.</span>
                            </Leadcopy>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                        <div className="formboxBg radiusCustom p-lg-5 p-3">
                            <h2 className="fontFormboxTitle text-center mb-lg-5 mb-4">농산물 납품 문의</h2>
                            {/* <Formbox></Formbox> */}
                            <Formboxhook></Formboxhook>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
