// Product Data (BIS-certified & non-certified products)
const products = [
    { name: "BIS Certified Milk", image: "images/milk.jpg", certified: true },
    { name: "BIS Certified Helmet", image: "images/helmet.jpg", certified: true },
    { name: "Unsafe Toy", image: "images/toy.jpg", certified: false },
    { name: "Counterfeit Charger", image: "images/charger.jpg", certified: false }
];

let score = 0;

// Function to display products
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;
        productDiv.addEventListener("click", () => checkProduct(product));
        productList.appendChild(productDiv);
    });
}

// Function to check if the selected product is BIS-certified
function checkProduct(product) {
    if (product.certified) {
        score += 10;
        alert("✅ Correct! This is a BIS-certified product.");
    } else {
        score -= 5;
        alert("❌ Incorrect! This is not a BIS-certified product.");
    }
    document.getElementById("score").innerText = "Score: " + score;
}

// Start game button
document.getElementById("start-game").addEventListener("click", loadProducts);
