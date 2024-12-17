import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import { useState } from "react";

import "./App.css";

function App() {
  const INITIAL_STATE = [
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
  ];
  const [colorList, setColorList] = useState(INITIAL_STATE);

  const addColor = (newColor) => {
    setColorList((prevColor) => [{...newColor}, ...prevColor]);
  };
  return (
    <BrowserRouter>
      <RouteList addColor={addColor} colors={colorList}/>
    </BrowserRouter>
  );
}

export default App;
