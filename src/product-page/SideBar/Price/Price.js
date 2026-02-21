// import "./Price.css";
// // import PriceInput from "../../Product-Components/priceInput";
// import Input from "../../Product-Components/Input";

// function Price({ handleChange, selectedPrice }) {
//   return (
//     <>
      
//       <h2 className="sidebar-title price-title">Price</h2>
//         <div className="price-filter">

//           <label className="sidebar-label-container">
//             <input onChange={handleChange} type="radio" value="" name="price" checked={selectedPrice === ""} />
//             <span className="checkmark"></span>All
//           </label>

//           <Input
//             handleChange={handleChange}
//             value={50}
//             title="Less than $50"
//             name="price"
//             selectedVal={selectedPrice}
//           />

//           <Input
//             handleChange={handleChange}
//             value={100}
//             title="$50 - $100"
//             name="price"
//             selectedVal={selectedPrice}
//           />

//           <Input
//             handleChange={handleChange}
//             value={150}
//             title="$100 - $150"
//             name="price"
//             selectedVal={selectedPrice}
//           />

//           <Input
//             handleChange={handleChange}
//             value={200}
//             title="Over $150"
//             name="price"
//             selectedVal={selectedPrice}
//           />
//         </div>
//     </>

//   );
// };

// export default Price;

import Input from "../../Product-Components/Input";
import "./Price.css";

function Price({ handleChange, selectedPrice }) {
  return (
    <div className="price-filter">
      <h2 className="sidebar-title">Price</h2>

      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="price"
        selectedVal={selectedPrice}
      />
        <Input
        handleChange={handleChange}
        value={50}
        title="Less than $50"
        name="price"
        selectedVal={selectedPrice}
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="price"
        selectedVal={selectedPrice}
      />

      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="price"
        selectedVal={selectedPrice}
      />

      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="price"
        selectedVal={selectedPrice}
      />
    </div>
  );
}

export default Price;