function Cart(localStorageName) {
    let cart = {
        cartItems: undefined,

        // Load cart from localStorage or initialize with default item
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageName));

            if (!this.cartItems) {
                this.cartItems = [{
                    id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOption: '1'
                }];
            }
        },

        //  Save cart to localStorage
        saveToLocalStorage() {
            localStorage.setItem(localStorageName, JSON.stringify(this.cartItems));

        },

        /**
        Add a product to the cart, or increase its quantity if it already exists
        {string} productId - The ID of the product to add
         */
        addToCart(productId) {
            const existingItem = this.cartItems.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cartItems.push({
                    id: productId,
                    quantity: 1,
                    deliveryOption: "1"
                });
            }
            this.saveToLocalStorage();
        },

        // @param {string} productId - The ID of the product to remove
        removeProduct(productId) {
            const finalCart = [];
            this.cartItems.forEach((product) => {
                if (product.id !== productId) {
                    finalCart.push(product);
                }
            });
            this.cartItems = finalCart;
            this.saveToLocalStorage();
        },

        // Calculate and update the cart quantity display
        CalculateCartQuantity() {
            let totalQuantity = 0;
            this.cartItems.forEach((product) => { totalQuantity += product.quantity; });
            document.querySelector(".js-cart-quantity").innerHTML = totalQuantity;
        },

        /**
        Update the delivery option for a specific product in the cart
        {string} productId - The ID of the product to update
        {string} deliveryOption - The selected delivery option ID
        */
        updateDeliveryOption(productId, deliveryOption) {
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
                if (cartItem.id == productId) {
                    matchingItem = cartItem;
                }
            });
            if (matchingItem) {
                matchingItem.deliveryOption = deliveryOption;
                this.saveToLocalStorage();
            }
        },

        addToCart2(productId) {
            const index = this.cartItems.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.cartItems[index].quantity += 1;
            } else {
                this.cartItems.push({ id: productId, quantity: 1, deliveryOption: '1' });
            }

            // or if u are working with name then

            let matchingItem;
            this.cartItems.forEach((cartItem) => {
                if (cartItem.id == productId) {
                    matchingItem = cartItem;
                }
            });
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({ id: productId, quantity: 1 });
            }
            this.saveToLocalStorage();
        },

        removeProduct2(productId) {
            this.cartItems = this.cartItems.filter(product => product.id !== productId);
            this.saveToLocalStorage();
        },

        calculateCartQuantity2() {
            const totalQuantity = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
            document.querySelector(".js-cart-quantity").textContent = totalQuantity;
            console.log(totalQuantity);
        },

        updateDeliveryOption2(productId, deliveryOption) {
            const matchingItem = this.cartItems.find(item => item.id === productId);
            if (matchingItem) {
                matchingItem.deliveryOption = deliveryOption;
                this.saveToLocalStorage();
            }
        }
    };
    return cart;
}

const cart = Cart('cart-oop');
cart.loadFromStorage();
// console.log(cart);

const cart2 = Cart('cart-class');
cart2.loadFromStorage();
// console.log(cart2);