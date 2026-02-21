// import "./Material.css";
// // import MaterialInput from "../../Product-Components/materialInput";
// import Input from "../../Product-Components/categoryInput";

// function Material({ handleChange, selectedMaterial }) {
//   return (
//     <>
//       <h2 className="sidebar-title color-title">Material</h2>
//         <div className="material-filter">
//           <label className="sidebar-label-container">
//             <input onChange={handleChange} type="radio" value="" name="material" checked={selectedMaterial === ""} />
//             <span className="checkmark all"></span>
//             All
//           </label>

//           <Input
//             handleChange={handleChange}
//             value="gold"
//             title="Gold"
//             name="material"
//             selectedVal={selectedMaterial}
//           />

//           <Input
//             handleChange={handleChange}
//             value="silver"
//             title="Silver"
//             name="material"
//             selectedVal={selectedMaterial}
//           />
//         </div>
//     </>
//   );
// };

// export default Material;

import Input from "../../Product-Components/Input";
import "./Material.css";

function Material({ handleChange, selectedMaterial }) {
  return (
    <div className="material-filter">
      <h2 className="sidebar-title">Material</h2>

      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="material"
        selectedVal={selectedMaterial}
      />
      <Input
        handleChange={handleChange}
        value="gold"
        title="Gold"
        name="material"
        selectedVal={selectedMaterial}
      />
      <Input
        handleChange={handleChange}
        value="silver"
        title="Silver"
        name="material"
        selectedVal={selectedMaterial}
      />
      {/* <Input
        handleChange={handleChange}
        value="platinum"
        title="Platinum"
        name="material"
        selectedVal={selectedMaterial}
      /> */}
    </div>
  );
}

export default Material;