import Category from "./Category/Category";
import Price from "./Price/Price";
import Material from "./Material/Material";
// import styles from "./Sidebar.module.css";

const Sidebar = ({ handleChange,selectedCategory, selectedMaterial, selectedPrice, closeSideBar }) => {
  // function closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  // }
  return (
      <section>
        <a href="javascript:void(0)" class="closebtn" onclick={closeSideBar}>&times;</a>
        <Category handleChange={handleChange} selectedCategory={selectedCategory} />
        <Price handleChange={handleChange} selectedPrice={selectedPrice} />
        <Material handleChange={handleChange} selectedMaterial={selectedMaterial} />
      </section>
  );
};

export default Sidebar;