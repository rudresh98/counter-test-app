import "./App.css";
import CompB from "./components/CompB";
import CompA from "./components/CompA";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const onInputHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  return (
    <div>
      <header>
        <h1 className="text-center underline text-7xl font-medium ">
          HI THERE
        </h1>
        <div className="my-10 w-full flex justify-center items-center">
          <input
            onChange={onInputHandler}
            className="w-52 border text-center "
            type="text"
            placeholder="type here ..."
          />
        </div>
        <p className="text-3xl text-center">{value}</p>
      </header>
    </div>
  );
}

export default App;
