import Category from "./Category/Category";
import Price from "./Price/Price";
import Material from "./Material/Material";
import "./Sidebar.css";

const Sidebar = ({ handleChange,selectedCategory, selectedMaterial, selectedPrice }) => {
  return (
      <section className="sidebar">
        <Category handleChange={handleChange} selectedCategory={selectedCategory} />
        <Price handleChange={handleChange} selectedPrice={selectedPrice} />
        <Material handleChange={handleChange} selectedMaterial={selectedMaterial} />
      </section>
  );
};

export default Sidebar;