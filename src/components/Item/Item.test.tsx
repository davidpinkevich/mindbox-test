import { render, screen } from "@testing-library/react";
import { Item } from "./Item";

const changeStatus = () => {};

describe("Header component", () => {
  test("renders item", () => {
    render(
      <Item
        text="First todo add"
        id="123-ds34-1231-d134"
        completed="action"
        changeStatus={changeStatus}
      />
    );
    const nameItem = screen.getByText("First todo add");
    expect(nameItem).toBeInTheDocument();
  });
});
