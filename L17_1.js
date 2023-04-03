let input = document.getElementById("input1");
let parentDiv = document.querySelector(".parent-div");

input.addEventListener("focus", function createDiv() {
  const div = document.createElement("div");
  parentDiv.appendChild(div);
  div.classList.add('div-ghost');
});

input.addEventListener("blur", function deleteDiv() {
  const div = document.querySelector(".div-ghost");
  const parent = div.parentNode;
  parent.removeChild(div);
});
