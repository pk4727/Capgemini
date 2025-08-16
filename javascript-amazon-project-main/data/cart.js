// // Load cart from localStorage or initialize with default item
export let cart = JSON.parse(localStorage.getItem("cart")) || [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOption: "1"
    }
];

// loading cart from backend
export function loadBackendCart(ProductsRendering) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        console.log(cart);
        ProductsRendering() // asynchronousing code because watting till product not come from backend
        console.log("Loding project from backend");
    });
    xhr.open('GET', "https://supersimplebackend.dev/cart");
    xhr.send();
}

//  Save cart to localStorage
function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// @param {string} productId - The ID of the product to remove
export function removeProduct(productId) {
    let finalCart = [];
    cart.forEach((product) => {
        if (product.id !== productId) {
            finalCart.push(product);
        }
    });
    cart = finalCart;
    saveToLocalStorage();
}

export function removeProduct2(productId) {
    cart = cart.filter(product => product.id !== productId);
    saveToLocalStorage();
}

// Calculate and update the cart quantity display
export function CalculateCartQuantity() {
    let totalQuantity = 0;
    cart.forEach((cartItem) => { totalQuantity += cartItem.quantity; });
    document.querySelector(".js-cart-quantity").innerHTML = totalQuantity;
}

export function calculateCartQuantity2() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector(".js-cart-quantity").textContent = totalQuantity;
    console.log(totalQuantity);
}

/**
 Update the delivery option for a specific product in the cart
 {string} productId - The ID of the product to update
 {string} deliveryOption - The selected delivery option ID
 */
export function updateDeliveryOption(productId, deliveryOption) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.id == productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.deliveryOption = deliveryOption;
        saveToLocalStorage();
    }
}

export function updateDeliveryOption2(productId, deliveryOption) {
    const matchingItem = cart.find(item => item.id === productId);
    if (matchingItem) {
        matchingItem.deliveryOption = deliveryOption;
        saveToLocalStorage();
    }
}


/**
Add a product to the cart, or increase its quantity if it already exists
{string} productId - The ID of the product to add
 */
export function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1,
            deliveryOption: "1"
        });
    }
    saveToLocalStorage();
}

export function addToCart2(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1, deliveryOption: '1' });
    }

    // or if u are working with name then

    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.id == productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveToLocalStorage();
}