// import { useState } from "react";
// import Box from "./components/Box";

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

// Hook with interface
import { FormEvent, useState } from "react";

interface Person {
  name: string;
  age: number;
}

const App = () => {
  const [user, setUser] = useState<Person>();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Age"
          value={user?.age || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />
        <input
          type="Text"
          placeholder="Name"
          value={user?.name || ""} // getting error of ( A component is changing an uncontrolled input to be controlled.) because user.name is initially undefined so we pass || "" to make it controlled form uncontrolled
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: e.target.value }))
          }
        />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default App;
