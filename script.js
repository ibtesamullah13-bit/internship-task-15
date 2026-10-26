
const cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const search = document.getElementById("search");

// Add products to the cart
document.querySelectorAll(".add-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({ name: name, price: price });

        updateCart();
    });
});

// Update the cart display
function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(function(item, index) {
        total += item.price;

        const row = document.createElement("div");
        row.className = "cart-item";

        const name = document.createElement("span");
        name.textContent = item.name + " - Rs. " +
            item.price.toLocaleString("en-PK");

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.addEventListener("click", function() {
            cart.splice(index, 1);
            updateCart();
        });

        row.append(name, removeButton);
        cartItems.appendChild(row);
    });

    totalDisplay.textContent = "Rs. " +
        total.toLocaleString("en-PK");
}

// Search for products
search.addEventListener("input", function() {
    const searchText = search.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(function(product) {
        const productName = product.dataset.name.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
});
