// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5)

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('water', 1);
add('beer', 20);

console.log(cart);
