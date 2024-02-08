import { Dispatch, SetStateAction } from "react";

type InputValType = string | number;

type PropsType<T> = {
  label: string;
  value: T; // Cannot find name 'T' so we pass <T> after PropsType
  setter: Dispatch<SetStateAction<T>>;
};

const Box = <T extends InputValType>({
  label,
  value,
  setter,
}: PropsType<T>) => {
  // Extend the T For InputValType (because T is not assignable to value) so now value can be string or number
  return (
    <form>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value as T)}
      />
    </form>
  );
};

export default Box;

// <T,> declare generic
