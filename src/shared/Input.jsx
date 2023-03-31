import React from "react";
import { debounce } from "lodash";
const Input = (props) => {
  const onSearchHandler = debounce((e) => {
    props.onChange(e.target.value);
  }, 1000);
  return (
    <div>
      <input {...props} onChange={onSearchHandler} />
    </div>
  );
};

export default Input;
