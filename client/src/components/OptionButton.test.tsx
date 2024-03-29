import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { OptionButton } from "./OptionButton";


describe("The option button on a question", () => {
  const mockOption = { id: 1, label: "Test Option", points: 3 };
  const mockHandleOptionSelect = vi.fn();

  it("is pink if selected", () => {
    render(
      <OptionButton
        isSelected={true}
        key={0}
        handleOptionSelect={mockHandleOptionSelect}
        option={mockOption}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-pink");
  });

  it("is blueish if not selected", () => {
    render(
      <OptionButton
        isSelected={false}
        key={0}
        handleOptionSelect={mockHandleOptionSelect}
        option={mockOption}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blueish-100");
  });
});
