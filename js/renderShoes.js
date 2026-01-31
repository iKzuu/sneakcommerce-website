const container = document.getElementById("shoes");

function renderShoes(data) {
    container.innerHTML = "";
    
    data.forEach(shoe => {
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
                        ${shoe.sizes.map(size => `<button>${size}</button>`).join("")}
                    </div>

                    <button class="bag">
                        <img src="assets/icons/white-bag.svg" alt="bag">
                    </button>
                </div>
            </div>

        `;

        container.appendChild(item);
    });
};

renderShoes(shoes);