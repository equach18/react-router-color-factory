import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NewColorForm.css";

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: "", value: "#000000" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    setFormData({ name: "", value: "#000000" });
    navigate("/colors");
  };

  return (
    <div className="NewColorForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Color Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="value">Color Picker: </label>
          <input
            type="color"
            id="value"
            name="value"
            placeholder="Color Value"
            value={formData.value}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add</button>
      </form>
      <p>
        <Link to="/colors">Go back</Link>
      </p>
    </div>
  );
}

export default NewColorForm;
