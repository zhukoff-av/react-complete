/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return (<div>
    <h1>Hey Hey </h1>
    <SearchParams />
  </div>)
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
