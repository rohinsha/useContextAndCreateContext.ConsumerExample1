import LangContext from "./LangContext";

export default function MyChild1() {
  const handleR = (e, para) => {
    console.log(e);
    console.log(para);
  };
  return (
    <LangContext.Consumer>
      {(langInChild) => {
        return (
          <div>
            <h1>hello I m mychild2 comp {langInChild.lang}</h1>
            <button onClick={() => langInChild.setLang("comp22")}>
              Click on MYCHILD1
            </button>
            <button onClick={(e) => handleR(e, "rohu")}>click me</button>
          </div>
        );
      }}
    </LangContext.Consumer>
  );
}
