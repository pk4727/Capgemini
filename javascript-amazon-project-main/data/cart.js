export let cart = JSON.parse(localStorage.getItem("cart"))
if (!cart) {
    cart = [{
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOption: '1'
    }
    ];
}

function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// adding data to cart
export function addToCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1, deliveryOption: '1' });
    }

    // or if u are working with name then

    // let matchingItem;
    // cart.forEach((cartItem) => {
    //     if (cartItem.id == productId) {
    //         matchingItem = cartItem;
    //     }
    // });
    // if (matchingItem) {
    //     matchingItem.quantity += 1;
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

export function updateDeliviryOption(productId, deliveryOption) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.id == productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOption = deliveryOption;
    saveToLocalStorage()
}