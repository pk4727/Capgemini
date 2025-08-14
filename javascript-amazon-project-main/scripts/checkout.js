import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

function centToDollar(centMoney) {
    return (centMoney/100).toFixed(2);
}

let totalPrice = 0;
let ShippingHandling = 0;
let cartItemsSummary = "";

cart.forEach((cartItems) => {

    let matchingProductDetails; // searching cart id into product file
    products.forEach((product) => {
        if (product.id === cartItems.id) {
            matchingProductDetails = product;
        }
    });
    let { id, image, name, priceCents } = matchingProductDetails;
    totalPrice += priceCents;
    // console.log(image, name, priceCents);

    cartItemsSummary += `
        <div class="cart-item-container">
            <div class="delivery-date"> Delivery date: Tuesday, June 21 </div>

            <div class="cart-item-details-grid">
                <img class="product-image" src="${image}">

                <div class="cart-item-details">
                    <div class="product-name"> ${name} </div>
                    <div class="product-price"> $${centToDollar(priceCents)} </div>
                    <div class="product-quantity">
                        <span> 
                            Quantity: <span class="quantity-label">${cartItems.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary"> Update </span>
                        <span class="delete-quantity-link link-primary"> Delete </span>
                    </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title"> Choose a delivery option: </div>
                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="delivery-option-${id}">
                        <div>
                            <div class="delivery-option-date"> Tuesday, June 21 </div>
                            <div class="delivery-option-price"> FREE Shipping </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="delivery-option-${id}">
                        <div>
                            <div class="delivery-option-date"> Wednesday, June 15 </div>
                            <div class="delivery-option-price"> $4.99 - Shipping </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="delivery-option-${id}">
                        <div>
                            <div class="delivery-option-date"> Monday, June 13 </div>
                            <div class="delivery-option-price"> $9.99 - Shipping </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});
document.querySelector('.order-summary').innerHTML = cartItemsSummary;

let TotalBeforeTax = totalPrice + ShippingHandling;
let EstimatedTax = TotalBeforeTax*0.1;
let totalOrderCost = TotalBeforeTax + EstimatedTax;

document.querySelector(".return-to-home-link").innerHTML = `${cart.length} items`;
document.querySelector(".payment-summary-row-items").innerHTML = `Items (${cart.length})`;
document.querySelector(".payment-summary-money-items").innerHTML = `$${centToDollar(totalPrice)}`

document.querySelector(".payment-summary-money-btax").innerHTML = `$${centToDollar(TotalBeforeTax)}`;
document.querySelector(".payment-summary-money-etax").innerHTML = `$${centToDollar(EstimatedTax)}`;
document.querySelector(".payment-summary-money-order").innerHTML = `$${centToDollar(totalOrderCost)}`