// Array of menu items
const menuItems = [
  { name: "Espresso", description: "A shot of rich, concentrated coffee.", price: 2.50 },
  { name: "Latte", description: "Espresso with steamed milk and a thin layer of foam.", price: 4.00 },
  { name: "Matcha Green Tea", description: "Finely ground powder of specially grown green tea leaves.", price: 3.50 },
  { name: "Chamomile", description: "A soothing, caffeine-free herbal infusion.", price: 3.00 },
  { name: "Croissant", description: "A flaky, buttery pastry.", price: 3.00 },
  { name: "Chocolate Chip Cookie", description: "Classic chewy cookie with rich chocolate chips.", price: 2.00 }
];

let orders = [];


function displayMenu() {
  const menuList = document.getElementById("menu-list");
  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card h-100 text-center shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="price fw-bold">$${item.price.toFixed(2)}</p>
          <button class="btn btn-primary" onclick="order('${item.name}')">Order Now</button>
        </div>
      </div>
    `;
    menuList.appendChild(card);
  });
}


function order(item) {
  alert("You ordered " + item + "!");
  orders.push(item);
  document.getElementById("summary").innerText = "Orders: " + orders.join(", ");
}


window.onload = displayMenu;
