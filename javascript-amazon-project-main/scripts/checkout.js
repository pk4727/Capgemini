// Import modules
import { cart, removeProduct, updateDeliveryOption, loadBackendCart } from "../data/cart.js";
import { getProductDetailsById, loadBackendProducts, loadBackendProductsFetch } from "../data/products.js";
import { centToDollar } from "./calculation.js";
import '../data/cart-oop.js';


// ESM = EcmaScript Module version of javascript coming frm direct internet
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"; // default export
// or
// const day = dayjs(); // external lib link data of dayjs coming from checkout.html


// Calculate delivery dates
const dayjsCalculator = dayjs();
const deliveryDates = [
    { id: "1", day: dayjsCalculator.format('dddd, MMMM D'), centMoney: 0 },
    { id: "2", day: dayjsCalculator.add(3, "days").format('dddd, MMMM D'), centMoney: 447 },
    { id: "3", day: dayjsCalculator.add(7, "days").format('dddd, MMMM D'), centMoney: 999 }
];

// Create delivery options HTML
function deliveryOptionsHtml(matchingProductDetails, cartItem) {
    let allDates = "";

    deliveryDates.forEach((date) => {
        let deliveryCharge = date.centMoney === 0 ? "FREE" : `$${centToDollar(date.centMoney)}`;
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
    renderPaymentSummary(10);
    return allDates;
}

// Render cart order summary
function renderOrderSummary() {
    let cartItemsSummary = ""; // Stores generated HTML for cart

    cart.forEach((cartItem) => {
        const matchingProduct = getProductDetailsById(cartItem.id);
        // console.log(matchingProduct);
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

// all payment calculation
function renderPaymentSummary(taxRate) {
    let productPriceCent = 0;
    let ShippingCent = 0;

    cart.forEach((cartItem) => {
        const product = getProductDetailsById(cartItem.id);
        productPriceCent += product.priceCents * cartItem.quantity;
        if (cartItem.deliveryOption === '2') {
            ShippingCent += 447;
        }
        else if (cartItem.deliveryOption === '3') {
            ShippingCent += 999;

        }
    });

    const totalBeforeTax = productPriceCent + ShippingCent;
    const estimatedTax = totalBeforeTax * (taxRate / 100);
    const orderTotal = totalBeforeTax + estimatedTax;

    document.querySelector(".return-to-home-link").innerHTML = `${cart.length} items`;
    document.querySelector(".payment-summary-row-items").innerHTML = `Items (${cart.length})`;
    document.querySelector(".payment-summary-money-items").innerHTML = `$${centToDollar(productPriceCent)}`
    document.querySelector(".payment-summary-money-sh").innerHTML = `$${centToDollar(ShippingCent)}`;
    document.querySelector(".payment-summary-money-btax").innerHTML = `$${centToDollar(totalBeforeTax)}`;
    document.querySelector(".payment-summary-money-etax").innerHTML = `$${centToDollar(estimatedTax)}`;
    document.querySelector(".payment-summary-money-order").innerHTML = `$${centToDollar(orderTotal)}`;
    // console.log(`${productPriceCent} \n${ShippingCent} \n${totalBeforeTax} \n${estimatedTax} \n${orderTotal}`);
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
            renderPaymentSummary(10);
        });
    });
}

// Update delivery option
function updateDelivery() {
    document.querySelectorAll('.js-delivery-option').forEach((option) => {
        option.addEventListener("click", () => {
            const { productId, deliveryOption } = option.dataset; // shorthand property
            updateDeliveryOption(productId, deliveryOption);
            renderOrderSummary(); // rebind delete events after re-render
            updateDelivery(); // rebind after re-render
            deleteProduct();  // rebind delete events after re-render
        });
    });
}

// ================================================ Callback ====================================================

async function loadingPage() {
    console.log("async loading");

    try {
        await loadBackendProductsFetch();
        await new Promise((resolve) => {
            loadBackendCart(() => {
                resolve();
            });
        });

    }
    catch (error) {
        console.log("Unexpected error. Please try again leter !");
    }
    renderOrderSummary();
    renderPaymentSummary(10);
    updateDelivery();
    deleteProduct();
    console.log('await completed');
}
loadingPage();


/*
// Using Promise.all to load all callback at one time before rendering
Promise.all([
    new Promise((resolve) => { // from XMLHttpRequest
        loadBackendProducts(() => {
            resolve();
        });
    }),
    // loadBackendProductsFetch(), // from fetch
    new Promise((resolve) => {
        loadBackendCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary(10);
    updateDelivery();
    deleteProduct();
});


// Using Promise to load products before rendering
new Promise((resolve) => {
    // Call loadBackendProducts and pass a callback
    loadBackendProducts(() => {
        // When products are loaded from backend,
        // "resolve" tells the Promise it has finished.
        resolve('Resolved promise 1');
    });

}).then((resolvedMessage1) => {
    console.log(resolvedMessage1);
    return new Promise((resolve) => {
        loadBackendCart(() => {
            resolve('Resolved promise 2');
        });
    });

}).then((resolvedMessage2) => { // When the promise is resolved, then() will run
    console.log(resolvedMessage2);
    // Now safe to render because products are available
    renderOrderSummary();    // shows cart items
    renderPaymentSummary(10); // shows totals with discount/shipping
    updateDelivery();        // updates delivery options
    deleteProduct();         // handles remove from cart
});


// Normal callback-based usage (Initial Render & Bindings)
loadBackendProducts(() => { // async (asynchronousing code)
    loadBackendCart(() => { // nested callback this increasese when new callback come so we use promise
        renderOrderSummary();
        renderPaymentSummary(10);
        updateDelivery();
        deleteProduct();
    });
});
*/