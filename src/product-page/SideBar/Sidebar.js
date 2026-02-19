import Category from "./Category/Category";
import Price from "./Price/Price";
import Material from "./Material/Material";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Material handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;