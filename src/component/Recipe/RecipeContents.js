import { TagType3 } from '../Common/style'

function RecipeContent({ recipeblank, recipeHref, recipeImg, foodNm, recipeNm, userNm, heart, tagData }) {
    return (
        <a href={recipeHref} className={recipeblank}>
            <span>
                <div className='position-relative'>
                    <TagType3 className='position-absolute top-0 left-0' $tag3Color={tagData.color}>{tagData.text}</TagType3>
                    <img src={recipeImg} alt={foodNm} className='recipeStyle' />
                </div>
                <div className='textboxStyle px-xxl-4 py-xxl-3 px-3 py-2'>
                    <p className='fontRecipeName'>{recipeNm}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='fontRecipeText'>{userNm} 님</p>
                        <div className='d-flex align-items-center'>
                            <img src="/img/recipe/heart.svg" alt="찜" className='imgStyle'/>
                            <p className='ps-1 ps-lg-2 lh-1 fontRecipeText'>{heart}</p>
                        </div>
                    </div>
                </div>
            </span>
        </a>
    )
}

export default RecipeContent
