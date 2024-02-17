interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const TestNavButton = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className="border-blueish-100 border-b-4 px-4 py-2 rounded hover:bg-blueish-100 mt-4"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
