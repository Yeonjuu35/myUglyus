import { DefalutButton, BigButton, RecipeButton, SnsIcon, Title, SubTitle, Leadcopy, TagType1, TagType2 } from "./component/Common/style.js"

function App() {
  return (
    <>
    <p className="fontTitle">가나다라마바사</p>
    <p className="fontVegeSwiper">We Are Ugly Us</p>
    <DefalutButton>더보기더보기더보기</DefalutButton>
    <DefalutButton Large>더보기더보기더보기</DefalutButton>
    <BigButton>더보기</BigButton>
    <RecipeButton>더보기</RecipeButton>
    <RecipeButton>더보기더보기더보기</RecipeButton>
    <div className="d-flex mx-2">
    <SnsIcon className="me-2"><img src="./img/footer/facebook.svg" alt="" className=""/></SnsIcon>
    <SnsIcon className="me-2"><img src="./img/footer/instagram.svg" alt="" className=""/></SnsIcon>
    <SnsIcon className="me-2"><img src="./img/footer/twitter.svg" alt="" className=""/></SnsIcon>
    <SnsIcon className="me-2"><img src="./img/footer/youtube.svg" alt="" className=""/></SnsIcon>
    </div>
    <Title>메인타이틀</Title>
    <SubTitle>서브타이틀</SubTitle>
    <Leadcopy className="">자연의 속도에 맞게 알맞게 익어가며 최고의 맛을 유지하기 위해 <span className="d-block">이번 년도 마지막 판매를 진행합니다!</span></Leadcopy>
    <TagType1>text</TagType1>
    <TagType2>text</TagType2>
    </>
  );
}

export default App;
