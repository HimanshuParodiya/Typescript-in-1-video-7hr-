export const saveLocal = (todos: TodoItemType[]): void => {
  localStorage.setItem("myTodos", JSON.stringify(todos));
};
export const getLocalData = (): TodoItemType[] => {
  const savedTodos = localStorage.getItem("myTodos");
  // return JSON.parse(savedTodos) if savedTodos is not null or undefined
  return savedTodos ? JSON.parse(savedTodos) : [];
};
