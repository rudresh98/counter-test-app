import React, { useState } from "react";

const InputTest = () => {
  const [value, setValue] = useState("");
  const onInputHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  return (
    <header>
      <h1 className="text-center underline text-7xl font-medium ">HI THERE</h1>
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
  );
};

export default InputTest;
