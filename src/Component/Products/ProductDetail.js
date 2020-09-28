import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { detailsProduct } from './actions/productActions';
import data from './data';

const ProductDetail = (props) =>{
// console.log(props.match.params.id);
// const product = data.products.find(x => x.id === props.match.params.id)

const [qty, setQty] = useState(1);
const productDetails = useSelector(state => state.productDetails);
const {product, loading, error} = productDetails;
const dispatch = useDispatch();

useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));

    return() => {

    };
}, []);

const handleAddCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
}

    return(
        <div>
        <div className="proDetail">
            <Link to="/">BAck to result</Link>
        </div>
        { loading ? <div>Loading...</div>:
         error ? <div>{error}</div>: 
    (<div className="proDetail">
         <ul className="products">
                     <li key={product.id}>
                 <div className="product">
                     <img src={product.img} className="productImg" alt="pro"/>
                     <div className="productName">
                 {/* <Link to={'/product/' + product.id}>{product.name}</Link> */}
                     </div>
                     <div className="productBrand">{product.brand}</div>
                     <div className="productPrice">${product.price}</div>
                     <div className="productRating">{product.rating} Stars({product.numReviews} Reviews)</div>
                 </div>
             </li>
        </ul>
        <div class="cartCard">
            <p>Price : ${product.price}</p>
            <p>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"} </p>
            <p>Qty:<select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map(x=>
                <option key={x+1} value={x+1}>{x+1} </option>
                )}
                </select>
            </p>
            {product.countInStock > 0 &&
            <button onClick={handleAddCart} className="btn btn-warning">Add to Cart</button>
            }
        </div>
     </div>
    )}
     </div>
    );
}

export default ProductDetail;