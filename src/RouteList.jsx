import { Routes, Route, Navigate } from "react-router-dom";
import ColorFactory from "./ColorFactory";
import NewColorForm from "./NewColorForm";
import ColorFinder from "./ColorFinder";

function RouteList({addColor, colors}) {
  return (
    <Routes>
      <Route path="/colors" element={<ColorFactory colors={colors}/>} />
      <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>} />
      <Route path="/colors/:color" element={<ColorFinder colors={colors}/>} />
      <Route path="/*" element={<Navigate to="/colors"/>} />
    </Routes>
  );
}

export default RouteList;
