import { ReactSetState } from "../types/utils";

type Input = {
  type: "text" | "checkbox" | "color";
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <div>
      <input
        type={type}
        className="w-full p-2 rounded-sm mb-2 bg-gray-700"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
