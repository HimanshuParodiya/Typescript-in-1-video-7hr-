// import { Dispatch, SetStateAction } from "react";

import { useContext } from "react";
import { ThemeContext } from "../App";

// type InputValType = string | number;

// type PropsType<T> = {
//   label: string;
//   value: T; // Cannot find name 'T' so we pass <T> after PropsType
//   setter: Dispatch<SetStateAction<T>>;
// };

// const Box = <T extends InputValType>({
//   label,
//   value,
//   setter,
// }: PropsType<T>) => {
//   // Extend the T For InputValType (because T is not assignable to value) so now value can be string or number
//   return (
//     <form>
//       <label>{label}</label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setter(e.target.value as T)}
//       />
//     </form>
//   );
// };

// export default Box;

// // <T,> declare generic

const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  //   alert(theme);
  console.log(theme);

  return (
    <div className="boxContainer">
      <h1>Box 1</h1>
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  );
};

export default Box;
