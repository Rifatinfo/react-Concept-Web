import About from "./About";
import Cart from "./Cart";

const CartContainer = ({handleIsActive, isActive}) => {
    return (
        <div>
            <h1 className="text-xl font-bold">Cart Container</h1>
            <div className="flex gap-3 mt-4">
                <button onClick={() => handleIsActive("cart")} className={`cursor-pointer ${isActive.cart? "btn btn-error ": "btn"}`}>Cart</button>
                <button onClick={() => handleIsActive("about")} className={`cursor-pointer ${isActive.cart? "btn": "btn btn-error"}`}>About</button>
            </div>

            {
                isActive.cart?<Cart></Cart> : <About></About>
            }
        </div>
    );
};

export default CartContainer;