export const cart = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},
{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2
},
{
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 2
}
];

// export const cart = [];

// adding data to cart
export function addToCart(productId) {
    const index = cart.findIndex(item => item.product === productId);
    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({ product: productId, quantity: 1 });
    }
    // or if u are working with name then

    // let found;
    // cart.forEach((cartItem) => {
    //     if(productName === cartItem.productName){
    //         found = cartItem;
    //     }
    // });
    // if(found){
    //     found.quantity +=1;
    // }else{
    //     cart.push({productName : productName, quantity:1});
    // }
    console.log(cart)
}

export function cartQuantity() {
    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })
    document.querySelector(".js-cart-quantity").innerHTML = totalQuantity;
    console.log(totalQuantity);
}