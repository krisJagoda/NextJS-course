import {useRouter} from "next/router";

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productID;
    console.log(productId);

    return (
        <h1>Details about product: {productId}</h1>
    )
}

export default ProductDetail;
