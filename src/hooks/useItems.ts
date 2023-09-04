import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodoItem } from "../types";

export const useItems = (input: string, setInput: (input: string) => void) => {
  const [items, setItems] = useState<ITodoItem[]>([]);

  const addItem = (text: string) => {
    const item = { id: uuidv4(), text, completed: "active" };

    if (input.trim().length) {
      setItems([...items, item]);
      setInput("");
    }
  };

  const changeStatus = (id: string) => {
    const finditem = items.find((item) => item.id === id);
    if (finditem)
      setItems(
        items.map((item) => {
          if (item.id === id)
            return {
              ...item,
              completed: item.completed === "active" ? "completed" : "active",
            };
          return item;
        })
      );
  };

  const changeItems = (items: ITodoItem[] = []) => {
    setItems(items);
  };

  const clearCompleted = () => {
    setItems(items.filter((item) => item.completed !== "completed"));
  };

  return { items, input, addItem, changeItems, changeStatus, clearCompleted };
};
