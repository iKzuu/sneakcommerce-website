const container = document.getElementById("shoes");

function renderShoes(data) {
    container.innerHTML = "";
    
    data.forEach(shoe => {
        let selectedSize = null;
        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
            <div class="name-n-type">
                <h3>${shoe.name}</h3>
                <p>${shoe.type}</p>
            </div>

            <div class="image-box">
                <img src="${shoe.image}" alt="${shoe.name}">
            </div>

            <div class="price-size-bag">
                <div class="price">
                    <strong>${shoe.price}</strong>
                </div>

                <div class="size-bag">
                    <div class="size">
                        ${shoe.sizes.map(size => `<button class="size-btn">${size}</button>`).join("")}
                    </div>

                    <button class="bag" data-id="${shoe.id}">
                        <img src="assets/icons/white-bag.svg" alt="bag">
                    </button>
                </div>
            </div>

        `;

        const sizeButton = item.querySelectorAll(".size-btn");
        sizeButton.forEach(btn => {
            btn.addEventListener("click", () => {
                sizeButton.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                selectedSize = btn.innerHTML;
            });
        });

        item.querySelector(".bag").addEventListener("click",() => {
            addToCart(shoe, selectedSize);
        });

        container.appendChild(item);
    });
};

renderShoes(shoes);