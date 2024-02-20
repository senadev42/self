import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestNavButton } from "./TestNavButton";
import { vi } from "vitest";

describe("The navigation button on the test screen", () => {
  it("should render the button with the given label", () => {
    const onClickMock = vi.fn();
    render(
      TestNavButton({
        buttonlabel: "Button Title",
        onClick: onClickMock,
        disabled: true,
      })
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Button Title");
  });

  it("should call the onClick handler when the button is clicked", async () => {
    const onClickMock = vi.fn();
    render(
      TestNavButton({
        buttonlabel: "Test",
        onClick: onClickMock,
        disabled: false,
      })
    );
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should not call the onclick handler when disabled", () => {
    const onClickMock = vi.fn();
    render(
      TestNavButton({
        buttonlabel: "Test",
        onClick: onClickMock,
        disabled: true,
      })
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
