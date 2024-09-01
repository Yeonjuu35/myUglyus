import { Title, Leadcopy, BigButton } from '../Common/style';
import '../../scss/vegeSubs.scss'

function Subscribe({ bgStyle, componentBlank }) {
    return (
        <section className={`py-5 ${bgStyle} ${componentBlank}`}>
            <div className='d-flex flex-column align-items-center customPadding'>
                <Title fontcolor="#ffffff" className='pb-lg-3 pb-2 text-center'>
                    나를 위한 건강하고 맛있는 친환경 장보기
                    <span className='d-block'>어글리어스 채소박스</span>
                </Title>
                <Leadcopy fontcolor="#ffffff" className='pb-5'>자세한 이용 방법이 궁금하다면?</Leadcopy>
                <BigButton btncolor="#ffffff" fontcolor="#5EAB42">야채박스 구경하기</BigButton>
            </div>
        </section>
    )
}

export default Subscribe