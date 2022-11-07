import {useRouter} from "next/router";

function Review() {
    const router = useRouter();
    const {productID, reviewID} = router.query;
    return (
        <h1>
            Review {reviewID} for product {productID}.
        </h1>
    )
    
}

export default Review;
