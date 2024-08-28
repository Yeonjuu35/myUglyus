function ReviewContent({imgSrc, imgAlt, userReview, vegebox, username}) {
    return (
        <div className="">
            <img src={imgSrc} alt={imgAlt} className="reviewBox" />
            <div className="d-flex flex-column reviewTextbox justify-content-between">
                <div className="d-flex flex-column pb-2">
                    <p className="colorOrange">★★★★★</p>
                    <p className="fontReviewText">{userReview}</p>
                </div>
                <div className="d-flex justify-content-end">
                    <p className="fontReviewSubs pe-1">{vegebox}</p>
                    <p className="fontReviewName">{username}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewContent
