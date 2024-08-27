function ReviewImg({imgSrc, imgAlt, userReview, vegebox, username}) {
    return (
        <div>
            <img src={imgSrc} alt={imgAlt} />
            <div className="d-flex flex-column">
                <p className="colorOrange">★★★★★</p>
                <p>{userReview}</p>
                <div className="d-flex">
                    <p>{vegebox}</p>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewImg
