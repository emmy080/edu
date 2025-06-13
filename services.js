// Sample JSON data
const products = [
  { name: "Mathematics Textbook", price: 20, type: "Book" },
  { name: "Science Learning App", price: 15, type: "Application" },
  { name: "Backpack", price: 30, type: "Stationery" },
  { name: "Pencil Set", price: 5, type: "Stationery" },
];

const quizData = [
  {
    question: "Which is the capital of france?",
    options: ["Berlin", "Rome", "Paris", "London"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Mars"
  }
];

let currentQuiz = 0;

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>Type: ${item.type}</p>
      <p>Price: $${item.price}</p>
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