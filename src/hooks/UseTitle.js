import { useEffect } from "react";

export const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Redux cart`;
  }, [title]);
  return null;
};
