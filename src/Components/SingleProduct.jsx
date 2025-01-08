
const SingleProduct = ({ product , handleSelectedProduct}) => {
    // console.log(product);
    const { image, price } = product;
    return (
        <div>
            <div className="card bg-base-100 w-60 shadow-xl">
                <figure>
                    <img
                        src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&t=st=1727777866~exp=1727778466~hmac=c872ec2fc38f5a287b141f4d01990874f17be83713ad0ebf1768fc2ab9ee88c7"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{price} $</h2>
                    <p>If a dog chews shoes </p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleSelectedProduct(product)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;