const elForm = document.querySelector(".form");
const elFormInputTodo = document.querySelector(".form-todo");
const elFormInputAfter = document.querySelector(".form-after");
const elList = document.querySelector(".hero-list");

let todos = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputTodo = elFormInputTodo.value;
  const inputAfter = elFormInputAfter.value;

  const todo = {
    enterTodo: inputTodo,
    enterAfter: inputAfter,
  };

  todos.push(todo);

  elFormInputTodo.value = null;
  elFormInputAfter.value = null;

  elList.innerHTML = null;

  for (let item of todos) {
    const newLiTodo = document.createElement("li");
    const newLiAfter = document.createElement("li");

    elList.textContent = item.enterTodo;
    elList.textContent = item.enterAfter;

    elList.appendChild(newLiTodo);
    elList.appendChild(newLiAfter);
  }
});
