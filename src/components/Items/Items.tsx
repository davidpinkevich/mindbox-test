import { FC } from "react";
import { Stack } from "@mantine/core";
import { Reorder } from "framer-motion";
import { Item } from "../Item/Item";
import { ItemsProps } from "../../types";
import { styles as animation } from "./styles";

export const Items: FC<ItemsProps> = ({
  items,
  filter,
  changeStatus,
  changeItems,
}) => {
  const newItems =
    filter === "all"
      ? items
      : items.filter((item) => item.completed === filter);
  return (
    <Reorder.Group values={newItems} onReorder={changeItems} axis="y">
      <Stack spacing="4px">
        {newItems.map((item) => (
          <Reorder.Item
            whileDrag={animation.whileDrag}
            value={item}
            key={item.id}
          >
            <Item changeStatus={changeStatus} {...item} />
          </Reorder.Item>
        ))}
      </Stack>
    </Reorder.Group>
  );
};
