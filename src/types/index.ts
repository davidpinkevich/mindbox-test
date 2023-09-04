import { ChangeEvent } from "react";

export interface ITodoItem {
  text: string;
  id: string;
  completed: string;
}

export interface ItemProps {
  text: string;
  id: string;
  completed: string;
  changeStatus: (id: string) => void;
}

export interface ItemsProps {
  items: ITodoItem[];
  filter: string;
  changeStatus: (id: string) => void;
  changeItems: (items: ITodoItem[]) => void;
}

export interface InputFieldPros {
  opened: boolean;
  input: string;
  total: number;
  setOpened: (arg: boolean) => void;
  addItem: (text: string) => void;
  addText: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IFilter {
  filter: string;
  items: ITodoItem[];
  changefilter: (filter: string) => void;
  clearCompleted: () => void;
}
