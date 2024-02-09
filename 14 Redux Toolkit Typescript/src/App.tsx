import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, decrement, increment, incrementByValue } from "./redux";

function App() {
  const [val, setVal] = useState<number>();
  const data = useSelector((state: StateType) => state.count);

  const dispatch = useDispatch();
  const incrementByValueHandler = () => {
    setVal(+"");
    dispatch(incrementByValue(val!));
  };

  return (
    <>
      <h1>Toolkit</h1>
      <br />
      <h1>{data}</h1>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <input
        type="number"
        value={val || ""}
        onChange={(e) => setVal(+e.target.value)}
      />
      <br />
      <button onClick={incrementByValueHandler}>Add</button>
      <br />
    </>
  );
}

export default App;
