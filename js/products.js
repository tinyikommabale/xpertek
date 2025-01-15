// Array product data fetched from a backend
const products = [
    { image: 'img/products/laptop.jpg', name: 'Laptop', price: 3500, category: 'Electronics' },
    { image: 'img/products/phone.jpg', name: 'Smart Phone', price: 1300, category: 'Electronics' },
    { image: 'img/products/tv.jpg', name: 'TV', price: 3000, category: 'Electronics' },
    { image: 'img/products/tshirt.jpg', name: 'Branded T-shirt', price: 130, category: 'Clothing' },
    { image: 'img/products/jeans.jpg', name: 'Jeans', price: 540, category: 'Clothing' },
    { image: 'img/products/sneaker.jpg', name: 'Sneaker', price: 1200, category: 'Clothing' },
    { image: 'img/products/sleeper.jpg', name: 'Sleeper Couch', price: 3400, category: 'Furniture' },
    { image: 'img/products/bulb.png', name: 'Light Bulb', price: 50, category: 'Furniture' },
    { image: 'img/products/bed.jpg', name: 'Bed', price: 2500, category: 'Furniture' },
    { image: 'img/products/meat.jpeg', name: 'Meat', price: 60, category: 'Food' },
    { image: 'img/products/rice.jpg', name: 'Rice', price: 45, category: 'Food' },
    { image: 'img/products/drinks.jpg', name: 'Soft Drink', price: 25, category: 'Food' },
];

// Reference to the product list container and category filter dropdown
const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');

/* Function to render products based on the selected category */
function renderProducts(filterCategory = 'all') {
    // Clear the current product list
    productList.innerHTML = '';

    // Filter products based on the selected category - condition
    const filteredProducts = filterCategory === 'all' ? products : products.filter(items=> items.category === filterCategory);

    // Generate and display product cards for each filtered product
    filteredProducts.forEach(items => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${items.image}" style="width: 100px; height: 80px;">
            <h3>${items.name}</h3>
            <p>Price: <b>R${items.price}</b></p>
            <p>Category: <b>${items.category}</b></p>
        `;
        productList.appendChild(productCard);
    });
}

// Event listener to update the product list when the filter changes
categoryFilter.addEventListener('change', (e) => {
    renderProducts(e.target.value);
});

// Initial render of all products
renderProducts();