const cartContainer = document.getElementById("cart-items");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty king/queen</p>";
} else {
    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <input type="checkbox">
                <div class="cart-image-box">
                    <img src="${item.image}"/>
                </div>
                <div class="name-to-qty">
                    <div class="name-n-size">
                        <h3>${item.name}</h3>
                        <p>${item.size}</p>
                    </div>
                    <div class="price-qty">
                        <h4>${item.price}</h4>
                        <div class="qty-deleteBtn">
                            <button class="deleteBtn">H</button>
                            <div class="qty">
                                <button class="qty-button" id="decrement">-</button>
                                <h4>${item.qty}</h4>
                                <button class="qty-button" id="increment">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}