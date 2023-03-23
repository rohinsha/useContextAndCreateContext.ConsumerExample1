import "./styles.css";
import { useState } from "react";
import MyChild1 from "./MyChild1";
import MyChild2 from "./MyChild2";
import LangContext from "./LangContext";
export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="App">
        <h1>Lang-'{lang}'</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={() => setLang("germany")}>
          Click to change lang from App Component
        </button>
        <hr />
        <MyChild1 />
        <hr />
        <MyChild2 />
      </div>
    </LangContext.Provider>
  );
}
