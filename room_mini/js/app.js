let budget = 100000;
let total = 0;
const room = document.getElementById("room");

document.getElementById("budget").innerText = budget;

function setBudget() {
  budget = Number(document.getElementById("budgetInput").value);
  document.getElementById("budget").innerText = budget;
}

function addItem(imgSrc, price) {
  if (total + price > budget) {
    alert("❌ Budget exceeded!");
    return;
  }

  total += price;
  document.getElementById("total").innerText = total;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.className = "furniture";
  img.style.left = "60px";
  img.style.top = "260px";

  makeDraggable(img);
  room.appendChild(img);
}

function makeDraggable(el) {
  let x, y;

  el.onmousedown = e => {
    x = e.offsetX;
    y = e.offsetY;

    document.onmousemove = e => {
      el.style.left = e.pageX - room.offsetLeft - x + "px";
      el.style.top = e.pageY - room.offsetTop - y + "px";
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  };
}

/* AUTO ARRANGE */
function autoLayout() {
  const items = document.querySelectorAll(".furniture");

  const layout = [
    { left: "80px", top: "280px" },
    { left: "260px", top: "280px" },
    { left: "440px", top: "260px" },
    { left: "620px", top: "240px" },
    { left: "350px", top: "120px" }
  ];

  items.forEach((item, i) => {
    item.style.left = layout[i % layout.length].left;
    item.style.top = layout[i % layout.length].top;
  });
}
