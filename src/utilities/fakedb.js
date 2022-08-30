// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};
    
    // get the shopping cart from local storage
    const shoredCart = localStorage.getItem('shopping-cart');
    if(shoredCart){
        shoppingCart = JSON.parse(shoredCart);
    }

    // add quantity
    // const quantity = shoppingCart[id];
    if(shoppingCart){
        shoppingCart[id] = shoppingCart[id] + 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () =>{
    let shoppingCart = {};
    
    const storedCart = localStorage.getItem('shopping-cart');
    
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const getCart = localStorage.getItem('shopping-cart');
    if(getCart){
        const shoppingCart = JSON.parse(getCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {

    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
};

