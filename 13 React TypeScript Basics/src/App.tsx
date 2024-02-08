// import { useState } from "react";
// import Box from "./components/Box";

import { useReducer } from "react";

// function App() {
//   const [val, setVal] = useState<string>("");

//   return (
//     <>
//       <div>
//         {/* <Box
//           // heading={23} //Type 'number' is not assignable to type 'string'
//           heading="This is box heading"
//           count={1}
//           func={() => {
//             alert("Function as a props");
//           }}
//           children={<div>This is children as a props</div>}
//         /> */}

//         {/* // children can also be pass as  */}
//         {/* <Box
//           // heading={23} //Type 'number' is not assignable to type 'string'
//           heading="This is box heading"
//           count={1}
//           func={() => {
//             alert("Function as a props");
//           }}
//         >
//           {"This is also an example of passing children"}
//         </Box> */}

//         {/* // Generic  */}

//         <Box label="Search" value={val} setter={setVal} />
//       </div>
//     </>
//   );
// }

// export default App;

// // Hook with interface
// import { FormEvent, useState } from "react";

// interface Person {
//   name: string;
//   age: number;
// }

// const App = () => {
//   const [user, setUser] = useState<Person>();
//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(user);
//   };
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <input
//           type="number"
//           placeholder="Age"
//           value={user?.age || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
//           }
//         />
//         <input
//           type="Text"
//           placeholder="Name"
//           value={user?.name || ""} // getting error of ( A component is changing an uncontrolled input to be controlled.) because user.name is initially undefined so we pass || "" to make it controlled form uncontrolled
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, name: e.target.value }))
//           }
//         />

//         <button type="submit">Register</button>
//       </form>
//     </>
//   );
// };

// export default App;

// // use Context hook with typescript
// import { ReactNode, createContext, useState } from "react";
// import Box from "./components/Box";

// type ThemeType = "light" | "dark";

// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [mode, setMode] = useState<ThemeType>("light");
//   const toggleTheme = () => {
//     setMode((prev) => (prev === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme: mode, toggleTheme: toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// const App = () => {
//   return (
//     <ThemeProvider>
//       <div>Hello</div>
//       <Box />
//     </ThemeProvider>
//   );
// };

// export default App;

// TypeScript with useReducer

type StateType = {
  count: number;
};
type ActionType =
  | {
      type: "Increment";
      payload: number;
    }
  | {
      type: "Decrement";
      payload: number;
    };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const initialState: StateType = {
  count: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = (): void => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };
  const decrement = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };
  return (
    <div>
      <h1>Count Change</h1>
      <p>Count : {state.count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
