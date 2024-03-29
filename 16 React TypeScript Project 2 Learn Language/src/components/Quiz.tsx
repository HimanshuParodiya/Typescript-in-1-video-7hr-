import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);

  const [questionCount, setQuestionCount] = useState<number>(0);

  const [answer, setAnswer] = useState<string>("");

  const navigate = useNavigate();

  const nextHandler = (): void => {
    setResult((prev) => [...prev, answer]);
    setQuestionCount((prev) => prev + 1);
    setAnswer("");
  };

  return (
    <Container maxWidth="sm" sx={{ padding: "1rem" }}>
      <Typography m={"2rem 0"}>Quiz</Typography>
      <Typography variant="h3">
        {questionCount + 1} - {"Randoms"}
      </Typography>
      <FormControl>
        <FormLabel sx={{ mt: "2rem", mb: "1rem" }}>Meaning</FormLabel>
        <RadioGroup value={answer} onChange={(e) => setAnswer(e.target.value)}>
          <FormControlLabel
            value={"Lol"}
            control={<Radio />}
            label={"Option 1"}
          />
        </RadioGroup>
      </FormControl>
      <Button
        sx={{ margin: "3rem 0" }}
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={answer === ""}
      >
        {questionCount === 7 ? "Submit" : "Next"}
      </Button>
    </Container>
  );
};

export default Quiz;
