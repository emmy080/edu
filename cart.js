let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "0";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <p>${item.name} - $${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(itemDiv);
  });

  totalDisplay.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();