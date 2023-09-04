import { useState, ChangeEvent } from "react";

export const useInput = () => {
  const [input, setInput] = useState<string>("");

  const addText = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return { input, setInput, addText };
};
