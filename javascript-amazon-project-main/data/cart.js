export let cart = JSON.parse(localStorage.getItem("cart"));

function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// adding data to cart
export function addToCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    // or if u are working with name then

    // let found;
    // cart.forEach((cartItem) => {
    //     if (cartItem.id == productId) {
    //         found = cartItem;
    //     }
    // });
    // if (found) {
    //     found.quantity += 1;
    // } else {
    //     cart.push({ id: productId, quantity: 1 });
    // }
    saveToLocalStorage();
}

export function removeProduct(id) {
    let finalCart = [];
    cart.forEach((product) => {
        if (product.id !== id) {
            finalCart.push(product);
        }
    });
    cart = finalCart;
    saveToLocalStorage();
}

export function CalculateCartQuantity() {
    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })
    document.querySelector(".js-cart-quantity").innerHTML = totalQuantity;
    console.log(totalQuantity);
} 