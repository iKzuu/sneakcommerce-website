
renderCart = () => {
    const cartContainer = document.getElementById("cart-items");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart-text">Your cart is empty king/queen</p>`;
        return;
    }

    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item" data-index="${index}">
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
                            <button class="deleteBtn"><img src="assets/icons/Delete.svg"></button>
                            <div class="qty">
                                <button class="qty-button decrement">-</button>
                                <h4>${item.qty}</h4>
                                <button class="qty-button increment">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}

renderCart();

// delegation
document.addEventListener("click", e => {
    if(e.target.type === "checkbox") return;

    const cartItem = e.target.closest(".cart-item");
    if(!cartItem) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartItem.dataset.index;

    if(e.target.closest(".deleteBtn")) {
        cart.splice(index, 1);
    }

    if(e.target.classList.contains("increment")) {
        if(cart[index].qty < 5) {
            cart[index].qty += 1;
        }
    }

    if(e.target.classList.contains("decrement")) {
        if(cart[index].qty > 1) {
            cart[index].qty -= 1;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
});