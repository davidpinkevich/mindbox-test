import { FC } from "react";
import { Flex, SegmentedControl, Button, Text } from "@mantine/core";
import { IFilter } from "../../types";

export const Filter: FC<IFilter> = ({
  items,
  clearCompleted,
  filter,
  changefilter,
}) => {
  return (
    <Flex justify="space-between" align="center" gap={40} mt={10}>
      <Text fz="20px" style={{ color: "rgb(69, 65, 74)" }}>
        {items.filter((item) => item.completed === "active").length} items left
      </Text>
      <SegmentedControl
        value={filter}
        onChange={changefilter}
        size="lg"
        color="gray"
        style={{ flexGrow: 1 }}
        data={[
          { label: "All", value: "all" },
          { label: "Active", value: "active" },
          { label: "Completed", value: "completed" },
        ]}
      >
        Filter
      </SegmentedControl>
      <Button size="lg" color="gray" onClick={clearCompleted}>
        Clear completed
      </Button>
    </Flex>
  );
};
