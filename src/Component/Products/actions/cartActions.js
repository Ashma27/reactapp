import axios from 'axios';
import Cookie from "js-cookie";
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) =>{
    try{
        const{data} = await axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload:{
            product : data.id,
            name: data.name,
            image: data.img,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }});
        // this is for cookie 
        const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    // this is for cookie END
    }catch(error){

    }
}
const removeFromCart = (productId) => (dispatch, getState) => {
dispatch({type: CART_REMOVE_ITEM, payload: productId });
const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}
export {addToCart, removeFromCart}