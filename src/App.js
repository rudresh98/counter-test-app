import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import RoutesComp from "./routes/Routes";
function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <RoutesComp />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
