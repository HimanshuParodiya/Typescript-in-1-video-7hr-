import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Learning = () => {
  const [questionCount, setQuestionCount] = useState<number>(0);
  const params = useSearchParams()[0].get("language") as LanguageType;
  console.log(params); // ja for japanese

  const navigate = useNavigate();

  const nextHandler = (): void => {
    setQuestionCount((prev) => prev + 1);
  };

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        padding: "1rem",
      }}
    >
      <Button
        onClick={
          questionCount === 0 // if the question number is 1
            ? () => navigate("/") // then go back to home
            : () => setQuestionCount((prev) => prev - 1) // if question number is 4 then go back to question number 3
        }
      >
        <ArrowBack />
      </Button>
      <Typography>Learning Mode Easy</Typography>

      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant="h4">
          {questionCount + 1} - {"Sample"}
        </Typography>
        <Typography color={"blue"} variant="h4">
          : {"Lol"}
        </Typography>
        <Button
          sx={{
            borderRadius: "50%",
          }}
        >
          <VolumeUp />
        </Button>
      </Stack>

      <Button
        sx={{ margin: "3rem 0" }}
        variant="contained"
        fullWidth
        onClick={questionCount === 7 ? () => navigate("/quiz") : nextHandler}
      >
        {questionCount === 7 ? "Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;

// Use useParams when you want to extract parameters from the route path.
// Use useSearchParams when you want to work with query parameters in the URL.
