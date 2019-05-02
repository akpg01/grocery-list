import "./styles.css";

// create a todo list
const inputSelect = document.querySelector('input[name="newerItem"]');
const mainList = document.querySelector(".list");
const allListItems = document.querySelectorAll(".list li");

allListItems.forEach(e => {
  e.addEventListener("click", myList);
});

inputSelect.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    makeNew();
    inputSelect.value = "";
  }
});

function makeNew() {
  let li = document.createElement("li");
  let content = document.createTextNode(inputSelect.value);
  li.appendChild(content);
  li.addEventListener("click", myList);
  mainList.appendChild(li);
}

// toggle line strike when items are clicked
function myList() {
  let temp = this.classList.toggle("red");
  if (temp) {
    let span = document.createElement("span");
    span.textContent = " X";
    span.addEventListener("click", () => {
      this.remove();
    });
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
  }
}
