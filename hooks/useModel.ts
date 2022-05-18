import { useState } from "react";

export const useModel = (initialValue: boolean): [value: boolean, toggle: () => void] => {
  const [modelOpen, setModelOpen] = useState<boolean>(initialValue);

  const toggle = () => setModelOpen((prev) => !prev);

  return [modelOpen , toggle];
};
