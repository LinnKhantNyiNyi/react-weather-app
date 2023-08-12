import { useContext } from "react";
import { UnitContext } from "../context/UnitContext";

export default function useUnit() {
  let contexts = useContext(UnitContext);
  if (contexts === undefined) {
    new Error("theme context should be only used in ThemeContextProvider");
  }
  return contexts;
}
