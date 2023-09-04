import { render, screen } from "@testing-library/react";
import { InputField } from "./InputField";

const addItem = () => {};
const addText = () => {};
const setOpened = () => {};

describe("render input field", () => {
  test("input", () => {
    render(
      <InputField
        input="Test words for mock"
        opened={false}
        addItem={addItem}
        addText={addText}
        setOpened={setOpened}
      />
    );

    const input = screen.getByTestId("test-input");
    expect(input).toHaveDisplayValue("Test words for mock");
  });
});
