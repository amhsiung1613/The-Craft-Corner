import Category from "./Category/Category";
import Price from "./Price/Price";
import Material from "./Material/Material";
import styles from "./Sidebar.module.css";

const Sidebar = ({ handleChange,selectedCategory, selectedMaterial, selectedPrice }) => {
  return (
      <section className={styles.sidebar}>
        <Category handleChange={handleChange} selectedCategory={selectedCategory} />
        <Price handleChange={handleChange} selectedPrice={selectedPrice} />
        <Material handleChange={handleChange} selectedMaterial={selectedMaterial} />
      </section>
  );
};

export default Sidebar;