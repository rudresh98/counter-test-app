import React from "react";
import Input from "../../shared/Input";
import { onGetCityList } from "../../services/Services";
const Search = () => {
  const onSearchHandler = (inputValue) => {
    console.log(inputValue);
    onGetCityData(inputValue);
  };
  const onGetCityData = async (inputValue) => {
    const data = await onGetCityList(inputValue);
    console.log(data.data);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="enter city name"
        className="input input-bordered input-accent w-full max-w-xs"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;
