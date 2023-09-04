import { render, screen } from "@testing-library/react";
import { Items } from "./Items";

describe("Items component", () => {
  const items = [
    { id: "1", text: "Item 1", completed: "active" },
    { id: "2", text: "Item 2", completed: "completed" },
    { id: "3", text: "Item 3", completed: "active" },
  ];
  const changeStatus = jest.fn();
  const changeItems = jest.fn();

  it("render correct number of items", () => {
    render(
      <Items
        items={items}
        filter="all"
        changeStatus={changeStatus}
        changeItems={changeItems}
      />
    );
    const itemsTotal = screen.getAllByRole("listitem");
    expect(itemsTotal.length).toBe(items.length);
  });
});
