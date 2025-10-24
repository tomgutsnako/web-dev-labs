let orders = [];

function order(item) {
  alert("You ordered " + item + "!");
  orders.push(item);
  document.getElementById("summary").innerText = "Orders: " + orders.join(", ");
}
