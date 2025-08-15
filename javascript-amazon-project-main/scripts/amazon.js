// import { carta ass c } from "../data/cart.js"; // like this way u can rename the variable
import { addToCart, CalculateCartQuantity } from "../data/cart.js"; // saving data into cart.js (reusability of variable and save from conflict)
import { products } from "../data/products.js"; // taking from products.js file

// cart function
CalculateCartQuantity()
ProductsRendering() // rendering function called
function ProductsRendering() { // rendering function that will send data to the frontand page
    let productsList = "";

    for (let i = 0; i < products.length; i++) {
        const { id, image, name, rating, priceCents } = products[i]; // 🔹 EDIT: used destructuring instead of 6 separate consts
        const starsRating = rating.stars;
        const countRating = rating.count;
        // console.log(image, name, starsRating, countRating, priceCents);

        const html = `
        <div class="product-container">
            <div class="product-image-container"><img class="product-image" src="${image}"></div>
            <div class="product-name limit-text-to-2-lines"> ${name} </div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${(starsRating * 10)}.png">
                <div class="product-rating-count link-primary">${countRating}</div>
            </div>

            <div class="product-priceCents"> $${(priceCents / 100).toFixed(2)} </div>

            <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png"> Added </div>
            <!-- <button class="add-to-cart-button button-primary" data-product-name="${name}"> Add to Cart </button> -->
            <button class="add-to-cart-button button-primary" data-product-id="${id}"> Add to Cart </button> 
        </div>
        `
        productsList += html;
        // console.log(html);
    }
    document.querySelector(".products-lists").innerHTML = productsList;

    // adding data to cart and increase cartQuantity
    document.querySelectorAll(".add-to-cart-button").forEach((button) => {
        button.addEventListener('click', () => {
            // converting data attribute name to camelCase name that is present in add to cart button (data-prod-name -> productName)
            const productId = button.dataset.productId;
            console.log(productId);
            addToCart(productId);
            CalculateCartQuantity()
        });
    });
}