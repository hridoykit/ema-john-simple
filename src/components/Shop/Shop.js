import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = selectedProduct => {
        // const newCart = [...cart, product];
        // setCart([...cart, product]);
        
        setCart([...cart, selectedProduct]);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h2>length: {products.length}</h2> */}
                {products.map(product =>
                    <Product
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    >
                        
                    </Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;