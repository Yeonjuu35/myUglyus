import React, { useState } from 'react';
import { Title, Leadcopy, RecipeButton } from '../Common/style';
import RecipeContent from './RecipeContents';
import '../../scss/recipe.scss';
import usdata from '../../data/data.json';

function Recipe({ bgStyle, componentBlank }) {
    const { recipeinfo, dir } = usdata.recipe;
    const [selectedBtn, setSelectedBtn] = useState(recipeinfo[0].btnNm);

    const handleButtonClick = (btnNm) => {
        setSelectedBtn(btnNm);
    };

    return (
        <section className={`${bgStyle} ${componentBlank} py-5 position-relative`}>
            <div className='pb-lg-5 pb-3'>
                <Title className='pb-lg-3 pb-2 text-center'>나를 위한 맞춤 레시피</Title>
                <Leadcopy className='text-center'>채소 박스로 만든 화제의 레시피, 같이 나눠요!</Leadcopy>
            </div>
            <div className="button-group text-center mb-lg-5 mb-2">
                {recipeinfo.map((item, index) => {
                    const buttonClass = index === 0 ? '' : 'ms-2';
                    return (
                        <RecipeButton 
                            key={`recipe${index}`}
                            onClick={() => handleButtonClick(item.btnNm)}
                            $active={item.btnNm === selectedBtn}
                            className={buttonClass}
                        >
                            {item.btnNm}
                        </RecipeButton>
                    );
                })}
            </div>
            <div className="d-flex justify-content-center align-items-center container customWidthS py-5 py-lg-0 recipeBg flex-wrap">
                {recipeinfo.find(item => item.btnNm === selectedBtn)?.recipe.slice(0, 4).map((recipe, i, arr) => (
                    <div key={`recipe${i}`}
                        className={`recipe-item 
                                    ${i !== arr.length - 1 ? "recipePadding" : ""}
                                    ${i < 2 ? "recipeUpPadding" : ""} 
                                    ${i % 2 === 0 ? "recipelayoutLeft" : "recipelayoutRight"}`}>
                        <RecipeContent
                            recipeHref={`/recipe/${recipe.recipehref}`}
                            recipeImg={`${dir}${recipe.imgNm}.${recipe.imgfile}`}
                            foodNm={recipe.foodNm}
                            recipeNm={recipe.recipeNm}
                            userNm={recipe.userNm}
                            heart={recipe.heart}
                            tagData={recipe.tags[0]}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Recipe;
