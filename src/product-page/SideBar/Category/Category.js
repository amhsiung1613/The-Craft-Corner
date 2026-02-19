import "./Category.css";
import Input from "../../Product-Components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="earring"
          title="Earrings"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="necklace"
          title="Necklaces"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="ring"
          title="Rings"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;