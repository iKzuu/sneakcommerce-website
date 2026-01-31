// filter shoes by brand
const filterLinks = document.querySelectorAll(".brand-filter-links a");
const brandMap = {
    nike: "Nike",
    nb: "New Balance",
    puma: "Puma"
}

filterLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const brand = link.dataset.brand;

        if (brand === "all") {
            renderShoes(shoes);
        } else {
            const filtered = shoes.filter(
                shoe => shoe.brand === brandMap[brand]
            );
            renderShoes(filtered);
        }
    });
});

// filter shoes by type

const filterTypeLinks = document.querySelectorAll(".nav-links a");
const typeMap = {
    men: ["Men's Shoes", "Unisex"],
    women: ["Women's Shoes", "Unisex"],
};

filterTypeLinks.forEach(link_type => {
    link_type.addEventListener("click", e => {
        e.preventDefault();

        filterTypeLinks.forEach(t => t.classList.remove("active"));
        link_type.classList.add("active");

        const shoes_type = link_type.dataset.type;

        if (shoes_type === "all-type") {
            renderShoes(shoes);
        } else {
            const filtered_type = shoes.filter(
                shoe => typeMap[shoes_type].includes(shoe.type),
            );
            renderShoes(filtered_type);
        }
    });
});


const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});