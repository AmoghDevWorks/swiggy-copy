import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () =>{
    const CartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return(
        <div className="p-2 m-4">
            <h1 className="capitalize text-lg text-center font-bold font-sans">cart</h1>
            <button className="m-auto my-2 p-2 rounded-md bg-green-400 text-white font-semibold font-sans" onClick={handleClearCart}>
                Clear Cart
            </button>
            <div className="w-2/3 h-fit mx-auto">
                {CartItems.length===0?<div className="p-5 m-auto font-sans font-bold text-3xl">Your Cart is empty.....</div>:<ItemList items={CartItems}/>}
                {/* <ItemList items={CartItems}/> */}
            </div>
        </div>
    )
}

export default Cart;