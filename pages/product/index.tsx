import Link from "next/link";

function ProductList({productID = 100}) {
    return (

        <>
            <Link href='/'>
                Home
            </Link>
            <Link href='/product/1'>
                <h2>Product 1</h2>
            </Link>
            <Link href='/product/2'>
                <h2>Product 2</h2>
            </Link>
            <Link href='/product/3'>
                <h2>Product 3</h2>
            </Link>
            <Link href={`/product/${productID}`}>
                <h2>Product {productID}</h2>
            </Link>
        </>

    );
}
export default ProductList;

