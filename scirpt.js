const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, image: "https://via.placeholder.com/300x200", description: "High-quality wireless headphones." },
  { id: 2, name: "Smart Watch", price: 89.99, image: "https://via.placeholder.com/300x200", description: "Track your fitness and notifications." },
  { id: 3, name: "Running Shoes", price: 69.99, image: "https://via.placeholder.com/300x200", description: "Comfortable and durable running shoes." },
  { id: 4, name: "Sunglasses", price: 29.99, image: "https://via.placeholder.com/300x200", description: "Stylish sunglasses for all occasions." }
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <p>${product.description}</p>
      <button>Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(product => 
    product.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

displayProducts(products);
