import { Delete } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: number) => void;
  editHandler: (id: number, title: string) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);
  const isChecked = todo.isCompleted;

  return (
    <Paper
      sx={{
        backgroundColor: isChecked ? "green" : "",
        padding: "1rem",
        color: isChecked ? "white" : "",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {editable ? (
          <TextField
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter" && textVal !== "") {
                editHandler(todo.id, textVal);
                setEditable(false);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}
        <Checkbox
          style={{ color: isChecked ? "black" : "" }}
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        <Button
          sx={{ color: isChecked ? "black" : "", fontWeight: "600" }}
          onClick={() => setEditable((prev) => !prev)}
        >
          {editable ? "Done" : "Edit"}
        </Button>
        <Button
          sx={{ color: isChecked ? "black" : "" }}
          onClick={() => deleteHandler(todo.id)}
        >
          <Delete />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
