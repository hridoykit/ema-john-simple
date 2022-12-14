import React from 'react';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    // const {handleCartBtn} = props;

    return (
        <div>
            <div className='product'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings} stars</small></p>
                </div>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;