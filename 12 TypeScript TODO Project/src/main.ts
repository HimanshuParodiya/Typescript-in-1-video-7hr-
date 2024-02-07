import "./style.css";

interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];
// const todos = Array<Todo>()

const todoContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
// const todoContainer = document.querySelector(".todoContainer")!;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // creating a checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) {
        item.isCompleted = checkBox.checked;
      }
    });
    paragraph.className = checkBox.checked ? "textCut" : "";
  };

  // creating p for title
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut" : "";
  // creating delete button
  const button: HTMLButtonElement = document.createElement("button");
  button.innerText = "X";
  button.className = "deleteButton";
  button.onclick = () => {
    deleteTodo(id);
  };

  // appending all todo item
  todo.append(checkBox, paragraph, button);
  todoContainer.append(todo);
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};

const renderTodo = (myTodo: Todo[]) => {
  todoContainer.innerText = "";
  myTodo.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};

myForm.onsubmit = (e) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.floor(Math.random() * 1000)),
  };

  todos.push(todo);
  todoInput.value = "";
  // console.log(todos);

  renderTodo(todos);
};
