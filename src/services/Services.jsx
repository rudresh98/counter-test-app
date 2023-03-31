import axios from "axios";

const onGetCityList = async (inputValue) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `http://api.weatherapi.com/v1/search.json?key=<enter you key>&q=${inputValue}`,
    headers: {},
  };
  const data = await axios.request(config);
  return data;
};

export { onGetCityList };
