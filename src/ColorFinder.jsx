import { useParams } from "react-router-dom";
import ColorPage from "./ColorPage";

/**
 * 
 * ColorFinder finds the color or renders null
 * Rendered at /colors/:color
 * 
 */
function ColorFinder({ colors }) {
  const { color } = useParams();
  if (color) {
    const currColor = colors.find(
      (c) => c.name.toLowerCase() === color.toLowerCase()
    );
    return <ColorPage color={currColor} />;
  }
  return null;
}

export default ColorFinder;
