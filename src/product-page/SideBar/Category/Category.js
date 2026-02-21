import "./Category.css";
import Input from "../../Product-Components/Input";

function Category({ handleChange, selectedCategory }) {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>      
      <div className="category-filter">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" checked={selectedCategory === ""}/>
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="earring"
          title="Earrings"
          name="category"
          selectedVal={selectedCategory}
        />
        <Input
          handleChange={handleChange}
          value="necklace"
          title="Necklaces"
          name="category"
          selectedVal={selectedCategory}
        />
        <Input
          handleChange={handleChange}
          value="ring"
          title="Rings"
          name="category"
          selectedVal={selectedCategory}
        />
      </div>
    </>
  );
}

export default Category;


// import Input from "../../Product-Components/Input";
// import "./Category.css";

// function Category({ handleChange, selectedCategory }) {
//   return (
//     <div className="category-filter">
//       <h2 className="sidebar-title">Category</h2>

//       <Input
//         handleChange={handleChange}
//         value=""
//         title="All"
//         name="category"
//         selectedVal={selectedCategory}
//       />
//       <Input
//         handleChange={handleChange}
//         value="earring"
//         title="Earrings"
//         name="category"
//         selectedVal={selectedCategory}
//       />
//       <Input
//         handleChange={handleChange}
//         value="necklace"
//         title="Necklaces"
//         name="category"
//         selectedVal={selectedCategory}
//       />
//       <Input
//         handleChange={handleChange}
//         value="ring"
//         title="Rings"
//         name="category"
//         selectedVal={selectedCategory}
//       />
//     </div>
//   );
// }

// export default Category;