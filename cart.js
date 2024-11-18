// cart.js

// Function to add a product to the cart
function addToCart(name, price) {
    // Get the existing cart from localStorage, or start with an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    let product = cart.find(item => item.name === name);
    if (product) {
        // If it's already in the cart, increase the quantity
        product.quantity += 1;
    } else {
        // Otherwise, add it as a new product
        cart.push({ name: name, price: price, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display and cart count
    displayCart();
    updateCartCount();
}

// Function to update the cart count display
function updateCartCount() {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate the total number of items in the cart
    let itemCount = cart.reduce((total, product) => total + product.quantity, 0);

    // Update the cart count display
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = `Cart: ${itemCount} items`;
    }
}

// Function to display the cart (for `cart.html`)
function displayCart() {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart element from the HTML
    let cartDiv = document.getElementById('cart');
    if (cartDiv) {
        cartDiv.innerHTML = ''; // Clear existing content

        // Display each product in the cart
        if (cart.length === 0) {
            cartDiv.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach(product => {
                let item = document.createElement('div');
                item.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
                cartDiv.appendChild(item);
            });
        }
    }
}

// Function to reset the cart
function resetCart() {
    // Clear the cart from localStorage
    localStorage.removeItem('cart');

    // Update the cart display
    displayCart();
}

// Load the cart display on page load if on `cart.html`
window.onload = function() {
    if (document.getElementById('cart')) {
        displayCart();
    }
};

