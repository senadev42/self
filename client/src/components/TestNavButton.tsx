interface ButtonProps {
  buttonlabel: string;
  onClick: () => void;
  disabled?: boolean;
}

export const TestNavButton = ({ buttonlabel, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`border-pink border-b-4 px-4 py-2 rounded mt-4 font-mono font-bold ${
        disabled ? " text-grey border-grey cursor-not-allowed" : "hover:bg-pink"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonlabel}
    </button>
  );
};
