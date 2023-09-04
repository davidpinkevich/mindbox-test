import { useState } from "react";
import { Collapse, Stack, Title } from "@mantine/core";
import { InputField } from "../InputField/InputField";
import { Items } from "../Items/Items";
import { Filter } from "../Filter/Filter";
import { useItems } from "../../hooks/useItems";
import { useInput } from "../../hooks/useInput";
import { useFilter } from "../../hooks/useFilter";
import "./App.scss";

function App() {
  const [opened, setOpened] = useState<boolean>(true);
  const { input, setInput, addText } = useInput();
  const { items, changeItems, addItem, changeStatus, clearCompleted } =
    useItems(input, setInput);
  const { filter, changefilter } = useFilter();

  return (
    <div className="App">
      <Title className="main-title" order={1}>
        ToDo list:
      </Title>
      <Stack className="container" maw={800} mx="auto" spacing="14px">
        <InputField
          opened={opened}
          setOpened={(arg) => setOpened(!arg)}
          addItem={addItem}
          addText={addText}
          input={input}
        />
        <Collapse
          in={opened}
          transitionDuration={600}
          transitionTimingFunction="linear"
        >
          <Items
            filter={filter}
            items={items}
            changeStatus={changeStatus}
            changeItems={changeItems}
          />
        </Collapse>
        <Filter
          items={items}
          filter={filter}
          changefilter={changefilter}
          clearCompleted={clearCompleted}
        />
      </Stack>
    </div>
  );
}

export default App;
