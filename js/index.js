const elForm = document.querySelector(".form");
const elInputTodo = document.querySelector(".input-todo");
const elInputAfter = document.querySelector(".input-after");
const elList = document.querySelector(".list");

const todos = [];
// let counter = 0

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const userValue = elInputTodo.value;
  const todoValue = elInputAfter.value;

  const todo = {
    name: userValue,
    after: todoValue,
  };

  todos.push(todo);

  elInputTodo.value = null;
  elInputAfter.value = null;

  elList.innerHTML = null;

  for (let item of todos) {
    const newLi = document.createElement("li");

    newLi.textContent = `${item.name} : (${item.after})`;
    elList.appendChild(newLi);

    newLi.style.listStyle = "none";
    newLi.style.marginTop = "10px";
    newLi.style.fontFamily = "sans-serif";
    newLi.style.fontSize = "30px";
  }
});
