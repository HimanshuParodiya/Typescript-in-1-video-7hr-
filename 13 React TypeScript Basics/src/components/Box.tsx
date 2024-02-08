type InputValType = string | number;

type PropsType<T> = {
  label: string;
  value: T; // Cannot find name 'T' so we pass <T> after PropsType
  onChange: () => void;
};

const Box = <T extends InputValType>({
  label,
  value,
  onChange,
}: PropsType<T>) => {
  // Extend the T For InputValType (because T is not assignable to value) so now value can be string or number
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};

export default Box;

// <T,> declare generic
