import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import { getLocalData, saveLocal } from "./utils/features";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getLocalData());
  // const [title, setTitle] = useState<string>("");
  // both are same
  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    const completedTodo: TodoItemType[] = todos.map((eachTodo) => {
      if (eachTodo.id === id) {
        eachTodo.isCompleted = !eachTodo.isCompleted;
        console.log(eachTodo);
      }
      return eachTodo;
    });
    setTodos(completedTodo);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    // const newTodos = todos.filter((item) => item.id != id);
    const confirmDelete = confirm(`Are you sure you want to delete `);
    if (confirmDelete) {
      const newTodos = todos.filter((item) => item.id != id);

      setTodos(newTodos);
    }
  };
  const editHandler = (id: TodoItemType["id"], newTitle: string): void => {
    const editTitle: TodoItemType[] = todos.map((eachTodo) => {
      if (eachTodo.id === id) {
        eachTodo.title = newTitle;
      }
      return eachTodo;
    });
    setTodos(editTitle);
  };
  const addTodo = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: Math.random() * 1000,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };
  useEffect(() => {
    localStorage.getItem("myTodos");
    saveLocal(todos);
  }, [todos]);

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack
        style={{
          overflowY: "scroll",
          scrollbarWidth: "thin" /* Firefox */,
          scrollbarColor: "transparent transparent" /* Firefox */,
          WebkitOverflowScrolling:
            "touch" /* Enables momentum scrolling in WebKit */,
          msOverflowStyle: "none" /* Internet Explorer */,
          marginBottom: "2rem",
        }}
        height={"75%"}
        direction={"column"}
        spacing={"1rem"}
        p={"1rem"}
      >
        {todos.map((todo) => (
          <TodoItem
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            key={todo.id}
            todo={todo}
          />
        ))}
      </Stack>
      <TextField
        onKeyDown={(e) => {
          if (e.key == "Enter" && title !== "") {
            addTodo();
          }
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={"New Task"}
      />
      <Button
        sx={{
          margin: "1rem 0",
        }}
        fullWidth
        variant="contained"
        onClick={() => addTodo()}
      >
        Add
      </Button>
    </Container>
  );
};

export default App;
