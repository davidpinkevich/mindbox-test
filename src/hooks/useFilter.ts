import { useState } from "react";

export const useFilter = () => {
  const [filter, setFilter] = useState<string>("all");

  const changefilter = (filter: string) => {
    setFilter(filter);
  };

  return { filter, changefilter };
};
