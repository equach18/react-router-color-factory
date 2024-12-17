import {Link} from "react-router-dom"
import "./ColorPage.css"
function ColorPage({ color }) {
  return (
    <div className="ColorPage">
      <div
        className="ColorPage-color"
        style={{
          backgroundColor: color.value,
        }}
      >
        <h3>This is {color.name}!</h3>
      </div>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default ColorPage;
