import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ColorFactory.css"
function ColorFactory({ colors }) {
  const colorList = colors.map((color) => (
    <li key={uuidv4()}>
      <Link to={`/colors/${color.name.toLowerCase()}`}>
        {color.name}
      </Link>
    </li>
  ));
  return (
    <div className="ColorFactory">
      <div className="ColorFactory-form">
        <h2>Welcome to the Color Factory.</h2>
        <Link className="ColorFactory-add" to="/colors/new">Add a new color!</Link>
      </div>
      <div className="ColorFactory-list">
        <p>Please select a color</p>
        <ul>{colorList}</ul>
      </div>
    </div>
  );
}

export default ColorFactory;
