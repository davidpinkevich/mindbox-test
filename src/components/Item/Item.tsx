import { FC } from "react";
import { Paper, Text, Image, Center } from "@mantine/core";
import check from "../../assets/icons/check.svg";
import { ItemProps } from "../../types";
import "./Item.scss";

export const Item: FC<ItemProps> = ({ text, id, completed, changeStatus }) => {
  return (
    <Paper
      className="item"
      shadow="md"
      style={{
        padding: "15px 50px",
        position: "relative",
      }}
    >
      <Center onClick={() => changeStatus(id)} className="check" w={30} h={30}>
        {completed === "completed" && (
          <Image style={{ width: "65%", height: "65%" }} src={check} />
        )}
      </Center>
      <Text
        className={completed === "active" ? "active-text" : "completed-text"}
        fz="20px"
      >
        {text}
      </Text>
    </Paper>
  );
};
