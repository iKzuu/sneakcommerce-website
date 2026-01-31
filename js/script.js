const filterLinks = document.querySelectorAll(".brand-filter-links a");
const brandMap = {
    nike: "Nike",
    nb: "New Balance",
    puma: "Puma"
}

const filterTypeLinks = document.querySelectorAll(".nav-links a");
const typeMap = {
    men: ["Men's Shoes", "Unisex"],
    women: ["Women's Shoes", "Unisex"],
};

let selectedBrand = "all";
let selectedType = "all-type";

// main filter function
applyFilter = () => {
    let result = shoes;

    if (selectedBrand !== "all") {
        result = result.filter(
            shoe => shoe.brand === brandMap[selectedBrand]
        );
    }

    if (selectedType !== "all-type") {
        result = result.filter(
            shoe => typeMap[selectedType].includes(shoe.type)
        );
    }

    renderShoes(result);
}

// filter shoes by brand
filterLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        selectedBrand = link.dataset.brand;
        applyFilter();
    });
});

// filter shoes by type
filterTypeLinks.forEach(link_type => {
    link_type.addEventListener("click", e => {
        e.preventDefault();

        filterTypeLinks.forEach(t => t.classList.remove("active"));
        link_type.classList.add("active");

        selectedType = link_type.dataset.type;
        applyFilter();
    });
});

// hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});