import { useEffect, useState } from "react";
import SingleProduct from "./singleProduct";

const AllProduct = ({handleSelectedProduct}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data =>setProducts(data));
    },[]);
    // console.log(products);
    return (
        <div>
            <h1 className="text-xl font-bold">All Product Item</h1>
            <div className="grid grid-cols-3  gap-3">
                {
                    products.map((product, idx) => <SingleProduct 
                    handleSelectedProduct={handleSelectedProduct}
                    product={product} key={idx}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProduct;