import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for(const item of cart){
        quantity = quantity + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
        shipping = shipping + item.shipping;
    }
    
    const tax = parseFloat((totalPrice *.1).toFixed(2));
    const total = totalPrice + shipping + tax;

    return (
        <div className='cart'>
            <h3>Orders Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Price: ${totalPrice}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Total: ${total}</h4>
        </div>
    );
};

export default Cart;