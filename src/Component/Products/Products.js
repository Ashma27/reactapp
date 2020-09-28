import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Products.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from './actions/productActions';


const Prodcuts = (props) => {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch (listProducts());
    }, [])


    return(
        loading ? <div>Loading...</div>:
            error ? <div>{error}</div>: 
        <div className="pro_main">
            <ul className="products">
                {
                    products.map(product => 
                        <li key={product.id}>
                    <div className="product">
                        <img src={product.img} className="productImg" alt="pro"/>
                        <div className="productName">
                    <Link to={'/product/' + product.id}>{product.name}</Link>
                        </div>
                        <div className="productBrand">{product.brand}</div>
                        <div className="productPrice">${product.price}</div>
                        <div className="productRating">{product.rating} Stars({product.numReviews} Reviews)</div>
                    </div>
                </li>
                        )
                }
           </ul>
        </div>
    )
}


export default Prodcuts;