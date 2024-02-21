import { Option } from "./DynamicTestComponent";

interface OptionButtonProps {
  isSelected: boolean;
  key: number;
  handleOptionSelect: (option: Option) => void;
  option: Option;
}

export const OptionButton = ({
  isSelected,
  key,
  handleOptionSelect,
  option,
}: OptionButtonProps) => {
  return (
    <button
      className={`my-2 ${
        isSelected ? "bg-pink" : "bg-blueish-100"
      } hover:bg-blueish-50 rounded-md text-white px-4 py-2 w-full h-full`}
      key={key}
      onClick={() => handleOptionSelect(option)}
    >
      {option.label}
    </button>
  );
};
