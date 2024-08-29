function ReviewContent({imgSrc, imgAlt, userReview, vegebox, username}) {
    return (
        <div className="">
            <img src={imgSrc} alt={imgAlt} className="reviewBox" />
            <div className="d-flex flex-column reviewTextbox justify-content-lg-between justify-content-center">
                <div className="d-flex flex-column pb-lg-2">
                    <p className="colorOrange customLineheight">★★★★★</p>
                    <p className="fontReviewText d-none d-lg-block">{userReview}</p>
                </div>
                <div className="d-flex justify-content-lg-end">
                    <p className="fontReviewSubs pe-1">{vegebox}</p>
                    <p className="fontReviewName">{username}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewContent
