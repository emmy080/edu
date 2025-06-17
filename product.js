// Sample JSON data
const products = [
  { name: "Mathematics Textbook", price: 7500, type: "Book", Image: "maths.webp" },
  { name: "Science Learning App", price: 2000, type: "Application", Image: "app.jpg" },
  { name: "Backpack", price: 15000, type: "Stationery", Image: "bag.jpg" },
  { name: "Classic school bag", price: 20000, type: "Stationery", Image: "school bag.jpg" },
  { name: "Essential mathematics", price: 3000, type: "Stationery", Image: "ess maths.jpg" },
  { name: "General Mathematics", price: 2500, type: "Stationery", Image: "gen maths.jpg" },
  { name: "Stylish backpack", price: 30000, type: "Stationery", Image: "sty bag.webp" },
  { name: "Bentgo Lunch bag", price: 15000, type: "Stationery", Image: "shopping.webp" },
  { name: "classic pen", price: 1500, type: "Stationery", Image: "pen.jpg" },
  { name: "Algebra calculator", price: 2500, type: "Stationery", Image: "cal.jpg" },
];
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
    <img src="${item.Image}" alt="${item.type}"/>
      <h3>${item.name}</h3>
      <p>Type: ${item.type}</p>
      <p>Price: &#8358;${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${products[index].name} added to cart!`);
}

function loadQuiz() {
  const quiz = quizData[currentQuiz % quizData.length];
  document.getElementById("quiz-question").textContent = quiz.question;

  const optionsDiv = document.getElementById("quiz-options");
  optionsDiv.innerHTML = "";
  quiz.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => {
      if (opt === quiz.answer) {
        alert("✅ Correct!");
      } else {
        alert("❌ Incorrect. Try again!");
      }
    };
    optionsDiv.appendChild(btn);
  });

  currentQuiz++;
}

displayProducts();
loadQuiz();
function toggleDropdown(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "block" ? "none" : "block";
}