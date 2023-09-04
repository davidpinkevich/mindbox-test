import {
  TextInput,
  ActionIcon,
  Image,
  Flex,
  Paper,
  Button,
} from "@mantine/core";
import { FC } from "react";
import { InputFieldPros } from "../../types";
import "./InputField.scss";
import arrow from "../../assets/icons/arrow.svg";

export const InputField: FC<InputFieldPros> = ({
  opened,
  input,
  setOpened,
  addText,
  addItem,
}) => {
  return (
    <>
      <Paper shadow="md" p="md">
        <Flex align="center" justify="space-between" gap="lg">
          <ActionIcon
            className="action-hover"
            p={5}
            size="lg"
            onClick={() => setOpened(opened)}
          >
            <Image
              className={opened ? "hidden" : "open"}
              src={arrow}
              alt="arrow"
            />
          </ActionIcon>
          <TextInput
            data-testid="test-input"
            placeholder="What needs to be done?"
            value={input}
            onChange={addText}
            p="5px"
            size="md"
            className="input"
            variant="unstyled"
          />
          <Button onClick={() => addItem(input)} size="md" color="gray">
            Add
          </Button>
        </Flex>
      </Paper>
    </>
  );
};
