import { useContext } from "react";
import LangContext from "./LangContext";

export default function MyChild1() {
  const langInChild = useContext(LangContext);
  console.log(langInChild);
  return (
    <div>
      <h1>hello I m mychild1 comp {langInChild.lang}</h1>
      <button onClick={() => langInChild.setLang("comp11")}>
        Click on MYCHILD1
      </button>
    </div>
  );
}
