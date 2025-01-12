import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [counter, setValue] = useState(0); //counter 초깃값 0 설정
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("call the API......");
  }, []);

  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);

  // cleanup
  const [showing, setShowing] = useState(false);
  const onShow = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
      </div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here...."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me !</button>
      <Button onClick={onClick} text={"click me"} />
    </div>
  );
}

export default App;
