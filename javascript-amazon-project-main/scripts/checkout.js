// Import modules
import { cart, removeProduct, updateDeliveryOption } from "../data/cart.js";
import products from "../data/products.js"; // default export not require {}

// ESM = EcmaScript Module version of javascript coming frm direct internet
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"; // default export
// or
// const day = dayjs(); // external lib link data of dayjs coming from checkout.html

// Helper: convert cents to dollars
function centToDollar(centMoney) {
    return (centMoney / 100).toFixed(2);
}

// Calculate delivery dates
const dayjsCalculator = dayjs();
const deliveryDates = [
    { id: "1", day: dayjsCalculator.format('dddd, MMMM D'), centMoney: 0 },
    { id: "2", day: dayjsCalculator.add(3, "days").format('dddd, MMMM D'), centMoney: 4.47 },
    { id: "3", day: dayjsCalculator.add(7, "days").format('dddd, MMMM D'), centMoney: 9.99 }
];

// let totalPrice = 0;
// let ShippingHandling = 0;

// Render cart order summary
function renderOrderSummary() {
    // Stores generated HTML for cart
    let cartItemsSummary = "";

    cart.forEach((cartItem) => {
        const matchingProduct = products.find(product => product.id === cartItem.id);
        let { id, image, name, priceCents } = matchingProduct;

        const deliveryDateObj = deliveryDates.find(date => date.id === cartItem.deliveryOption);
        const deliveryDate = deliveryDateObj.day;
        // totalPrice += priceCents;

        cartItemsSummary += `
            <div class="cart-item-container js-cart-item-container-${id}">
                <div class="delivery-date">Delivery date: ${deliveryDate}</div>

                <div class="cart-item-details-grid">
                    <img class="product-image" src="${image}">

                    <div class="cart-item-details">
                        <div class="product-name">${name}</div>
                        <div class="product-price">$${centToDollar(priceCents)}</div>
                        <div class="product-quantity">
                            <span>Quantity: <span class="quantity-label">${cartItem.quantity}</span></span>
                            <span class="update-quantity-link link-primary js-update-product" data-update-product="${id}">Update</span>
                            <span class="delete-quantity-link link-primary js-delete-product" data-deleted-product="${id}">Delete</span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        ${deliveryOptionsHtml(matchingProduct, cartItem)}
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector('.order-summary').innerHTML = cartItemsSummary;
}

// Create delivery options HTML
function deliveryOptionsHtml(matchingProductDetails, cartItem) {
    let allDates = "";

    deliveryDates.forEach((date) => {
        let deliveryCharge = date.centMoney === 0 ? "FREE" : `$${date.centMoney}`;
        const isChecked = date.id === cartItem.deliveryOption;

        allDates += `
            <div class="delivery-option js-delivery-option" 
                data-product-id="${matchingProductDetails.id}" 
                data-delivery-option="${date.id}">
                <input 
                    type="radio" 
                    ${isChecked ? 'checked' : ''} 
                    class="delivery-option-input" 
                    name="delivery-option-${matchingProductDetails.id}">
                <div>
                    <div class="delivery-option-date"> ${date.day} </div>
                    <div class="delivery-option-price"> ${deliveryCharge} - Shipping </div>
                </div>
            </div> 
        `;
    });
    return allDates;
}

// Remove product from cart
function deleteProduct() {
    document.querySelectorAll('.js-delete-product').forEach((link) => {
        link.addEventListener('click', function () {
            const productId = link.dataset.deletedProduct;
            removeProduct(productId);

            const itemDeleted = document.querySelector(`.js-cart-item-container-${productId}`);
            if (itemDeleted) {
                itemDeleted.remove();
            }
        });
    });
}

// Update delivery option
function updateDelivery() {
    document.querySelectorAll('.js-delivery-option').forEach((option) => {
        option.addEventListener("click", () => {
            const { productId, deliveryOption } = option.dataset; // shorthand property
            updateDeliveryOption(productId, deliveryOption);
            renderOrderSummary();
        });
    });
}

// Initial render and event binding
renderOrderSummary();
updateDelivery();
deleteProduct();

// function reviewOrder() {
//     let TotalBeforeTax = totalPrice + ShippingHandling;
//     let EstimatedTax = TotalBeforeTax * 0.1;
//     let totalOrderCost = TotalBeforeTax + EstimatedTax;

//     document.querySelector(".return-to-home-link").innerHTML = `${cart.length} items`;
//     document.querySelector(".payment-summary-row-items").innerHTML = `Items (${cart.length})`;
//     document.querySelector(".payment-summary-money-items").innerHTML = `$${centToDollar(totalPrice)}`

//     document.querySelector(".payment-summary-money-btax").innerHTML = `$${centToDollar(TotalBeforeTax)}`;
//     document.querySelector(".payment-summary-money-etax").innerHTML = `$${centToDollar(EstimatedTax)}`;
//     document.querySelector(".payment-summary-money-order").innerHTML = `$${centToDollar(totalOrderCost)}`
// }
// reviewOrder();

function matchingProductDetails(cartItems) {
    // let matchingProductDetails; // searching cart id into product file
    // products.forEach((product) => {
    //     if (product.id === cartItems.id) {
    //         matchingProductDetails = product;
    //     }
    // });

    // or

    const matchingProductDetails = products.find(product => product.id === cartItems.id);
    return matchingProductDetails;
}