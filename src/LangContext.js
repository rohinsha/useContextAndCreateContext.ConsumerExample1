import { createContext } from "react";

let langContext = createContext({
  lang: "en",
  setLang: () => {}
});

export default langContext;
