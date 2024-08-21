import styled from "styled-components"

// 버튼
// 기본 버튼 
export const DefalutButton = styled.button`
    background : #FE663F;
    font-size: 15px;
    font-weight: 600;
    color : #FFFFFF;
    width : ${props => props.large ? '260px' : '135px'};
    height : 40px;
    border : none;
    border-radius : 20px;
`
export const BigButton = styled.button`
    background: ${(props) => props.btncolor || '#FE663F'};
    font-size: 1.375em;
    font-weight: 600;
    color: ${(props) => props.fontcolor || '#FFFFFF'};
    width: 25em;
    height: 3em;
    border : none;
    border-radius: 1.25em;
    @media (max-width : 1200px) {
        width: 20em;
        height: 2.5em;
    }
    @media (max-width : 990px) {
        font-size: 0.9375em;
        width: 17.8125em;
        height: 2.5em;
        border-radius: 0.625em;
    }
`

// 레시피 탭 버튼
export const RecipeButton = styled.button`
    background: transparent;
    font-size: 10px;
    font-weight: 600;
    color : #CECECE; 
    width : auto;
    line-height : 2.55;
    padding : 0 2em;
    border : none;
    @media (min-width : 991px) {
        border : 1px solid #CECECE;
        border-radius : 20px; 
        font-size: 15px;
    }
`

// sns 아이콘 버튼
export const SnsIcon = styled.a`
    background : #FE663F;
    width : 42px;
    height : 42px;
    border : none;
    border-radius : 10px;
    display : flex;
    justify-content : center;
    ailgn-items : center;
    padding : 9px;
`

// 컴포넌트 텍스트
export const Title = styled.h2`
    font-size: 38px;
    font-weight: 700;
    @media (max-width : 990px) {
        font-size: 18px;
    }
`
export const SubTitle = styled.p`
    font-size: 22px;
    font-weight: 600;
    @media (max-width : 990px) {
        font-size: 12px;
    }
`
export const Leadcopy = styled.p`
    font-size: 1.125em;
    font-weight: 300;
    line-height: 1.75em;
    @media (max-width : 990px) {
        font-size: 0.625em;
        line-height: 1.5em;
    }
`

// 태그
export const TagType1 = styled.p`
    display : inline-block;
    background: ${(props) => props.tag1Color || '#FE663F'};
    font-size: 15px;
    color : #FFFFFF;
    font-weight: 600;
    border-radius : 20px;
    padding : 0.05em 0.7em;
    @media (max-width : 990px) {
        font-size: 8px;
        border-radius : 10px;
    }
`
export const TagType2 = styled.p`
    display : inline-block;
    background: ${(props) => props.tag1Color || '#FE663F'};
    font-size: 1.5em;
    color : #FFFFFF;
    font-weight: 600;
    border-radius : 3.125em;
    padding : 0.2em 0.7em;
    @media (max-width : 990px) {
        font-size: 0.875em;
        border-radius : 0.9375em;
    }
`
export const TagType3 = styled.p`
    display : inline-block;
    background: ${(props) => props.tag2Color || '#FE663F'};
    font-size: 15px;
    color : #ffffff;
    font-weight: 600;
    border-radius : 15px 0 15px 0;
    padding : 0.2em 0.8em;
    @media (max-width : 990px) {
        font-size: 8px;
        border-radius : 10px 0 10px 0;
    }
`