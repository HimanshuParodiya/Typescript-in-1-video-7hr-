import { ReactNode } from "react";

type PropsType = {
  heading: string;
  count?: number; // ? for adding default props
  func: () => void;
  children: ReactNode;
};

const Box = ({ heading, count = 5, func, children }: PropsType) => {
  // const Box = ({ heading }: { heading: string }) => {
  func();
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      <p>{children}</p>
    </div>
  );
};

export default Box;
